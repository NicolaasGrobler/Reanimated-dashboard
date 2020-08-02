import React, { Component }     from 'react';
import ScalableInputController  from '../SmallComponents/ScalableInputController';
import ScalableInput            from '../SmallComponents/ScalableInput';
import ScalableTextArea         from '../SmallComponents/ScalableTextArea';
import { Link, Redirect  }      from "react-router-dom";
import $                        from 'jquery';

export default class AddEventTab extends React.Component {
    constructor(props){
        super(props);

        this.createEvent = this.createEvent.bind(this);
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

    render(){
        return (
            <div>
                <div className='widget'><h1>Creating an event</h1></div>
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

                    <button onClick={this.createEvent}>Create Event</button>
                </div>
            </div>
        );
    }
}