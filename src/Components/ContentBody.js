import React, { Component }     from 'react';
import ScalableInput            from './SmallComponents/ScalableInput';
import ScalableInputController  from './SmallComponents/ScalableInputController';
import ScalableTextArea         from './SmallComponents/ScalableTextArea';
import InputFile                from './SmallComponents/InputFile';
import EventCard                from './EventCard';
import EditableEventCard        from './EditableEventCard';
import { Switch, Route }        from "react-router-dom";
import $                        from 'jquery';
import                               './ContentBody.css';

export default class ContentBody extends Component {
    render() {
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

                <Switch>
                    <Route path='/Accounts'>
                        <Accounts />
                    </Route>

                    <Route path='/Meetings'>
                        <Meetings />
                    </Route>

                    <Route path='/Security'>
                        <Security />
                    </Route>

                    <Route path='/Users'>
                        <Users />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }
}

function Home() {
    return (
        <div>
            <div className='widgetContainer'>
                <div className='widget eventContainer' id='Event1'>
                    <EventCard EventName='Test Event' EventDate='22 July 2020' EventImage='https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                </div>
                <div className='widget eventContainer' id='Event2'>
                    <EventCard EventName='Another Test Event' EventDate='22 August 2020' EventImage='https://images.pexels.com/photos/3612706/pexels-photo-3612706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                </div>
                <div className='widget eventContainer' id='Event3'>
                    <EventCard EventName='Test Event' EventDate='22 July 2020' EventImage='https://images.pexels.com/photos/2351719/pexels-photo-2351719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                </div>
            </div>

            <div className='widgetContainer'>
                <div className='widget eventContainer'  id='Event4'>
                    <EventCard EventName='Another Test Event' EventDate='22 August 2020' EventImage='https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                </div>
            </div>

            <div className='widgetContainer buttonGroup'>
                <div className='AddEventButton'>Add Event</div>
                <div className='AddEventButton'>Remove All Events</div>
            </div>
        </div>
    );
}

function Accounts() {
    return (
        <div>I am the Accounts page</div>
    );
}

function Meetings() {
    return (
        <div>I am the Meetings page</div>
    );
}

function Security() {
    return (
        <div>I am the Security page</div>
    );
}

function Users() {
    return (
        <div>I am the Users page</div>
    );
}