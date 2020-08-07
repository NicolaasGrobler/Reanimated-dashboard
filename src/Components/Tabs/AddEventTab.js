import React, { Component }     from 'react';
import ScalableInputController  from '../SmallComponents/ScalableInputController';
import ScalableInput            from '../SmallComponents/ScalableInput';
import ScalableTextArea         from '../SmallComponents/ScalableTextArea';
import { Link, Redirect  }      from "react-router-dom";
import $                        from 'jquery';
import { validateInput, homeButton, inputsChanged }        from '../../UtilsFunctions/utilFunctions';
import PopupModal from '../PopupModal';

const inputs = ['eventNameInput','descriptionBox', 'eventPlaceInput', 'eventDateInput', 'eventTimeInput', 'eventContactPersonInput', 'eventContactDetailsInput', 'eventImageUrlInput'];

export default class AddEventTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            popupElem: <PopupModal title={'Are you sure you want to create this event?'} keyword={'create'} togglePopup={this.props.togglePopup} continueEvent={this.createEvent}/>
        }

        this.createEvent = this.createEvent.bind(this);
        this.selectCreateModal = this.selectCreateModal.bind(this);
        this.cancel = this.cancel.bind(this);
    } 

    async createEvent(){
        let postData = {
            eventName: $('#eventNameInput').val(),
            eventDate: $('#eventDateInput').val(),
            eventPlace: $('#eventPlaceInput').val(),
            eventURL: $('#eventImageUrlInput').val(),
            eventTime: $('#eventTimeInput').val(),
            eventDescription: $('#descriptionBox').val(),
            eventContactPerson: $('#eventContactPersonInput').val(),
            eventContactDetails: $('#eventContactDetailsInput').val(),
        }

        let result = await fetch('http://localhost:4545/createEvent', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        window.location.replace("http://localhost:3000/");
    }

    async selectCreateModal() {
        if(validateInput(inputs)){
            await this.setState({
                popupElem: <PopupModal title={'Are you sure you want to create this event?'} keyword={'create'} togglePopup={this.props.togglePopup} continueEvent={this.createEvent}/>
            });
    
            await this.props.setPopup(this.state.popupElem);
    
            this.props.togglePopup();
        }
    }

    async cancel() {
        if (!inputsChanged(inputs)) {
            homeButton();
        } else {
            await this.setState({
                popupElem: <PopupModal title={`You've completed some fields, are you sure?`} keyword={'yes'} togglePopup={this.props.togglePopup} continueEvent={homeButton}/>
            });
    
            await this.props.setPopup(this.state.popupElem);
    
            this.props.togglePopup();
        }
    }

    async componentDidUpdate() {
        $('#descriptionBox').css('height', 'auto');
        let descriptionBoxScrollHeight = document.getElementById('descriptionBox').scrollHeight;
        document.getElementById('descriptionBox').style.height = descriptionBoxScrollHeight + 4 + 'px';
    }

    render(){
        return (
            <div>
                <div className='widget'><h1>Creating an event</h1></div>
                <div className='widget'>
                <ScalableInputController />
                    <ScalableInput labelName='Event Name' type='text' inputId={'eventNameInput'} validationType='normal'/>
                    <ScalableInput labelName='Place' type='text' inputId={'eventPlaceInput'} validationType='normal'/>
                    <ScalableInput labelName='Date' type='date' inputId={'eventDateInput'} validationType='normal'/>
                    <ScalableInput labelName='Time' type='time' inputId={'eventTimeInput'} validationType='normal'/>
                    <ScalableTextArea labelName='Description' validationType='normal'/>
                    <ScalableInput labelName='Contact Person' type='text' inputId={'eventContactPersonInput'} validationType='normal'/>
                    <ScalableInput labelName='Contact Details' type='text' inputId={'eventContactDetailsInput'} validationType='cellNumber'/>
                    <ScalableInput labelName='Event Image Url' type='text' inputId={'eventImageUrlInput'} validationType='normal'/>

                    <button className='EventButton' onClick={this.selectCreateModal}>Create Event</button>
                    <button className='EventButton' onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        );
    }
}