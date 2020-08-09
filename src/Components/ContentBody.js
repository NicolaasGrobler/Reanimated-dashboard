import React, { Component }     from 'react';
import ScalableInput            from './SmallComponents/ScalableInput';
import ScalableInputController  from './SmallComponents/ScalableInputController';
import ScalableTextArea         from './SmallComponents/ScalableTextArea';
import InputFile                from './SmallComponents/InputFile';
import EventCard                from './EventCard';
import EditableEventCard        from './EditableEventCard';
import { Switch, Route }        from "react-router-dom";
import $                        from 'jquery';
import EventsTab                from './Tabs/EventsTab';
import AddEventTab              from './Tabs/AddEventTab';
import EditEventTab             from './Tabs/EditEventTab';
import                               './ContentBody.css';
import ImageUploader from './ImageUploader';

export default class ContentBody extends Component {
    render() {
        return (
            <div className="contentBody" id='contentBody'>
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

                    <Route path='/AddEvent'>
                        <AddEventTab togglePopup={this.props.togglePopup} setPopup={this.props.setPopup} />
                    </Route>

                    <Route path='/EditEvent'>
                        <EditEventTab togglePopup={this.props.togglePopup} setPopup={this.props.setPopup}/>
                    </Route>

                    <Route path='/'>
                        <EventsTab/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

function Accounts() {
    return (
        <div>
            <div className='widgetContainer'>
                <div className='widget'>
                    <ImageUploader />
                </div>
                <div className='widget'>
                    <ImageUploader />
                </div>
                <div className='widget'>
                    <ImageUploader />
                </div>
            </div>
        </div>
    )
}

function Meetings() {
    return (
        <div>
            <div className='widget'>
                <h1>I am a widget</h1>
            </div>
            <div className='widget'>
                <ScalableInputController/>
                <ScalableInput labelName='Test Input' type='text' validationType='normal'/>
                <ScalableInput labelName='Date Input' type='date' validationType='normal'/>
                <ScalableInput labelName='Time Input' type='time' validationType='normal'/>
                <button className='EventButton'>Test Button</button>
                <button className='EventButton'>Test Button 2</button>
                <button className='EventButton'>Test Button 3</button>
            </div>
        </div>
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