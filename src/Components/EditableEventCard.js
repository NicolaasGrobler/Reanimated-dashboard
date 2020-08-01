import React, { Component } from 'react';
import './EditableEventCard.css';
import ScalableInput from './SmallComponents/ScalableInput';
import ScalableInputController from './SmallComponents/ScalableInputController';
import ScalableTextArea from './SmallComponents/ScalableTextArea';

export default class EditableEventCard extends Component {
    render() {
        return (
            <div>
                <div className='EditableEventCard'>
                    <div className='EventCardContent'>
                        <div className='EventImage' style={{backgroundImage: this.props.EventImage}}></div>
                        <button>Choose Image</button>

                        {/* <h1 className='EventCardTitle'>{this.props.EventName}</h1>
                        <h2>{this.props.EventDate}</h2> */}

                        <ScalableInputController />

                        <ScalableInput labelName='Event Name' type='text'/>
                        <ScalableInput labelName='Place' type='text'/>

                        <div className='InputContainer'>
                            <ScalableInput labelName='Time' type='time'/>
                            <ScalableInput labelName='Date' type='date'/>
                        </div>

                        <ScalableTextArea labelName='Description'/>

                        <ScalableInput labelName='Contact Person' type='text'/>
                        <ScalableInput labelName='Contact Details' type='text'/>

                        <button>Save Event</button>
                    </div>
                </div>
            </div>
        )
    }
}
