import React, { Component } from 'react';
import ScalableInput from './SmallComponents/ScalableInput';
import ScalableInputController from './SmallComponents/ScalableInputController';
import ScalableTextArea from './SmallComponents/ScalableTextArea';
import InputFile from './SmallComponents/InputFile';
import EventCard from './EventCard';
import $ from 'jquery';
import './ContentBody.css';
import EditableEventCard from './EditableEventCard';

export default class ContentBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayEditCard : false,
            CardImg : ''
        }

        this.EventClick = this.EventClick.bind(this);
    }

    EventClick(e) {
        let bgImage = $(e.currentTarget).find('.EventCard').find('.EventCardContent').find('.EventImage')[0].style.backgroundImage;

        $(`#contentBody`).children().animate({opacity: 0}, 300, async () => {
            $(`#contentBody`).children().hide();

            await this.setState({
                displayEditCard : true,
                CardImg: bgImage
            });

            $('.editableEventContainer').show();
            $('.editableEventContainer').animate({opacity: 1}, 500);
        });
    }

    render() {
        let EditCard = null;

        if (this.state.displayEditCard) {
            EditCard = (<div className='widget editableEventContainer' style={{opacity: 0}}>
            <EditableEventCard EventName='Another Test Event' EventDate='22 August 2020' EventImage={this.state.CardImg}/>
        </div>)
        }

        return (
            <div className="contentBody" id='contentBody'>
                {/* <div className='widgetContainer'>
                    <div className='widget eventContainer' id='Event1' onClick={(e) => this.EventClick(e)}>
                        <EventCard EventName='Test Event' EventDate='22 July 2020' EventImage='https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                    </div>
                    <div className='widget eventContainer' id='Event2' onClick={(e) => this.EventClick(e)}>
                        <EventCard EventName='Another Test Event' EventDate='22 August 2020' EventImage='https://images.pexels.com/photos/3612706/pexels-photo-3612706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                    </div>
                    <div className='widget eventContainer' id='Event3' onClick={(e) => this.EventClick(e)}>
                        <EventCard EventName='Test Event' EventDate='22 July 2020' EventImage='https://images.pexels.com/photos/2351719/pexels-photo-2351719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                    </div>
                </div>

                <div className='widgetContainer'>
                    <div className='widget eventContainer'  id='Event4' onClick={(e) => this.EventClick(e)}>
                        <EventCard EventName='Another Test Event' EventDate='22 August 2020' EventImage='https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                    </div>
                </div>

                <div className='widgetContainer buttonGroup'>
                    <div className='AddEventButton'>Add Event</div>
                    <div className='AddEventButton'>Remove All Events</div>
                </div>

                {EditCard} */}
            </div>
        )
    }
}
