import React, { Component }     from 'react';
import ScalableInputController  from '../SmallComponents/ScalableInputController';
import ScalableInput            from '../SmallComponents/ScalableInput';
import ScalableTextArea         from '../SmallComponents/ScalableTextArea';
import { Link, Redirect  }      from "react-router-dom";
import $                        from 'jquery';
import PopupModal               from '../PopupModal';
import { validateInput, homeButton, inputsChanged }        from '../../UtilsFunctions/utilFunctions';
import ImageUploader from '../ImageUploader';

const inputs = ['eventNameInput','descriptionBox', 'eventPlaceInput', 'eventDateInput', 'eventTimeInput', 'eventContactPersonInput', 'eventContactDetailsInput'];

export default class EditEventTab extends React.Component {
    constructor(props){
        super(props);

        this.saveChanges = this.saveChanges.bind(this);

        this.state = {
            eventName: '',
            eventDate: '',
            eventPlace: '',
            eventURL: '',
            eventTime: '',
            eventDescription: '',
            eventContactPerson: '',
            eventContactDetails: '',
            popupElem: <PopupModal title={'Are you sure you want to delete this event?'} keyword={'delete'} togglePopup={this.props.togglePopup} continueEvent={this.deleteModalEvent}/>
        }

        this.selectDeletePopup = this.selectDeletePopup.bind(this);
        this.selectSavePopup = this.selectSavePopup.bind(this);
        this.Cancel = this.Cancel.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.getData = this.getData.bind(this);
        this.deleteModalEvent = this.deleteModalEvent.bind(this);
    } 

    async getData(currentFile, currentName) {
        this.setState({
            currentFile: currentFile,
            currentName: currentName
        });
    }

    async componentDidMount() {
        let eventId = window.location.href.split('?')[1].split('t')[1];

        let fetchedData = await fetch(`http://localhost:4545/getEvent/${eventId}`).then((data) => {
            return data.json();
        });

        await this.setState({
            firstRender: true,
            eventName: fetchedData[0].event_name,
            eventPlace: fetchedData[0].event_place,
            eventDate: fetchedData[0].event_date,
            eventTime: fetchedData[0].event_time,
            eventContactDetails: fetchedData[0].event_contact_details,
            eventContactPerson: fetchedData[0].event_contact_person,
            eventDescription: fetchedData[0].event_description,
            eventURL: fetchedData[0].event_img
        });
    }

    async selectSavePopup() {

        if(validateInput(inputs)){
            await this.setState({
                popupElem: <PopupModal title={'Are you sure you want to save the changes?'} keyword={'save'} togglePopup={this.props.togglePopup} continueEvent={this.saveChanges}/>
            });
    
            await this.props.setPopup(this.state.popupElem);
    
            this.props.togglePopup();
        }
    }

    async selectDeletePopup() {
        await this.setState({
            popupElem: <PopupModal title={'Are you sure you want to delete this event?'} keyword={'delete'} togglePopup={this.props.togglePopup} continueEvent={this.deleteModalEvent}/>
        });

        await this.props.setPopup(this.state.popupElem);

        this.props.togglePopup();
    }

    async Cancel() {
        if (!inputsChanged(inputs)) {
            homeButton();
        } else {
            await this.setState({
                popupElem: <PopupModal title={'Are you sure you want to discard the changes made?'} keyword={'yes'} togglePopup={this.props.togglePopup} continueEvent={homeButton}/>
            });
    
            await this.props.setPopup(this.state.popupElem);
    
            this.props.togglePopup();
        }
    }

    async saveChanges() {
        await this.uploadFile();

        let eventId = window.location.href.split('?')[1].split('t')[1];

        let postData = {
            eventName: $('#eventNameInput').val(),
            eventDate: $('#eventDateInput').val(),
            eventPlace: $('#eventPlaceInput').val(),
            eventURL: this.state.eventURL,
            eventTime: $('#eventTimeInput').val(),
            eventDescription: $('#descriptionBox').val(),
            eventContactPerson: $('#eventContactPersonInput').val(),
            eventContactDetails: $('#eventContactDetailsInput').val(),
        }

        let result = await fetch(`http://localhost:4545/updateEvent/${eventId}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        window.location.replace("http://localhost:3000/");
    }

    async deleteModalEvent() {
        let eventId = window.location.href.split('?')[1].split('t')[1];

        let result = await fetch(`http://localhost:4545/deleteEvent/${eventId}`, {
            method: 'DELETE',
            mode: 'cors'
        });

        let temp = this.state.eventURL;
        temp = temp.split('/');
        temp = temp[temp.length - 1];

        await fetch(`http://localhost:4545/deleteFile/${temp}`, {
            method: 'POST'
        });

        window.location.replace("http://localhost:3000/");
    }

    async uploadFile() {
        if (this.state.currentFile) {

            if (this.state.currentName) {
                await fetch(`http://localhost:4545/deleteFile/${this.state.currentName}`, {
                    method: 'POST'
                });
            }

            let formData = new FormData();
            let fileField = document.querySelector('#fileUploadField');
    
            formData.append('file', this.state.currentFile);
    
            let result = await fetch('http://localhost:4545/uploadFile', {
                method: 'POST',
                body: formData
            }).then((res) => {
                return res.json();
            });

            await this.setState({
                eventURL: 'http://localhost:4545/getImage/' + result.fileName
            });
        }
    }

    async componentDidUpdate() {
        //Scale Inputs        
        if (this.state.firstRender) {
            $('#eventNameInput').val(this.state.eventName);
            $('#eventPlaceInput').val(this.state.eventPlace);
            $('#eventDateInput').val(this.state.eventDate);
            $('#eventImageUrlInput').val(this.state.eventURL);
            $('#eventTimeInput').val(this.state.eventTime);
            $('#descriptionBox').val(this.state.eventDescription);
            $('#eventContactPersonInput').val(this.state.eventContactPerson);
            $('#eventContactDetailsInput').val(this.state.eventContactDetails);

            let nameInputs = document.getElementsByClassName('scalableInput');
            Object.keys(nameInputs).forEach(key => {
                $('#hide').text(nameInputs[key].value);
                $(nameInputs[key]).width($('#hide').width());
            });

            //Scale TextArea
            $('#descriptionBox').css('height', 'auto');
            let descriptionBoxScrollHeight = document.getElementById('descriptionBox').scrollHeight;
            document.getElementById('descriptionBox').style.height = descriptionBoxScrollHeight + 4 + 'px';

            this.setState({
                firstRender: false
            });
        }
    }

    render(){
        return (
            <div>
                <div className='widget'><h1>Editing an event</h1></div>
                <div className='widget'>
                    <ScalableInputController />
                    <ScalableInput labelName='Event Name' type='text' inputId={'eventNameInput'} validationType='normal' emptyFirst={true}/>
                    <ScalableInput labelName='Place' type='text' inputId={'eventPlaceInput'} validationType='normal' emptyFirst={true}/>
                    <ScalableInput labelName='Date' type='date' inputId={'eventDateInput'} validationType='normal' emptyFirst={true}/>
                    <ScalableInput labelName='Time' type='time' inputId={'eventTimeInput'} validationType='normal' emptyFirst={true}/>
                    <ScalableTextArea labelName='Description' validationType='normal' emptyFirst={true}/>
                    <ScalableInput labelName='Contact Person' type='text' inputId={'eventContactPersonInput'} validationType='normal' emptyFirst={true}/>
                    <ScalableInput labelName='Contact Details' type='text' inputId={'eventContactDetailsInput'} validationType='cellNumber' emptyFirst={true}/>
                    <ImageUploader buttonText='Use photo' setImageURL={(imgName) => this.setImageURL(imgName)} backgroundImg={this.state.eventURL} buttonIsValid={true} getData={(currentFile,currentName) => this.getData(currentFile, currentName)}/>

                    <button className='EventButton' onClick={this.selectSavePopup}>Save Changes</button>
                    <button className='EventButton' onClick={this.selectDeletePopup}>Delete Event</button>
                    <button className='EventButton' onClick={this.Cancel}>Cancel</button>
                </div>
            </div>
        );
    }
}