import React, { Component } from 'react';
import $ from 'jquery';
import './EventCard.css';

export default class EventCard extends Component {
    render() {
        return (
            <div className='EventCard'>
                <div className='EventOverlay'>
                    <div className='EventEditButton'>
                        Edit
                    </div>
                </div>

                <div className='EventCardContent'>
                    <div className='EventImage' style={{backgroundImage: `url(${this.props.EventImage})`}}></div>
                    <h1 className='EventCardTitle'>{this.props.EventName}</h1>
                    <h2>{this.props.EventDate}</h2>
                </div>
            </div>
        )
    }
}
