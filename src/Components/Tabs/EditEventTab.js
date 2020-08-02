import React, { Component }     from 'react';
import ScalableInputController  from '../SmallComponents/ScalableInputController';
import ScalableInput            from '../SmallComponents/ScalableInput';
import ScalableTextArea         from '../SmallComponents/ScalableTextArea';
import { Link, Redirect  }      from "react-router-dom";
import $                        from 'jquery';

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
        }
    } 

    async componentDidMount() {
        let eventId = window.location.href.split('?')[1].split('t')[1];

        let fetchedData = await fetch(`http://localhost:4545/getEvent/${eventId}`).then((data) => {
            return data.json();
        });

        await this.setState({
            eventName: fetchedData[0].event_name,
            eventPlace: fetchedData[0].event_place,
            eventDate: fetchedData[0].event_date,
            eventTime: fetchedData[0].event_time,
            eventContactDetails: fetchedData[0].event_contact_details,
            eventContactPerson: fetchedData[0].event_contact_person,
            eventDescription: fetchedData[0].event_description,
            eventURL: fetchedData[0].event_img,
        });
    }

    async saveChanges(){
        let postData = {
            eventName: $('#eventNameInput').val(),
            eventDate: $('#eventDateInput').val(),
            eventPlace: $('#eventPlaceInput').val(),
            eventURL: $('#eventImageUrlInput').val()
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

    componentDidUpdate() {
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
    }

    render(){
        return (
            <div>
                <div className='widget'><h1>Editing an event</h1></div>
                <div className='widget'>
                    <ScalableInputController />
                    <ScalableInput labelName='Event Name' type='text' inputId={'eventNameInput'}/>
                    <ScalableInput labelName='Place' type='text' inputId={'eventPlaceInput'}/>
                    <ScalableInput labelName='Date' type='date' inputId={'eventDateInput'}/>
                    <ScalableInput labelName='Time' type='time' inputId={'eventTimeInput'}/>
                    <ScalableTextArea labelName='Description'/>
                    <ScalableInput labelName='Contact Person' type='text' inputId={'eventContactPersonInput'}/>
                    <ScalableInput labelName='Contact Details' type='text' inputId={'eventContactDetailsInput'}/>
                    <ScalableInput labelName='Event Image Url' type='text' inputId={'eventImageUrlInput'}/>

                    <button onClick={this.saveChanges}>Save Changes</button>
                </div>
            </div>
        );
    }
}