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
import EditEventTab              from './Tabs/EditEventTab';
import                               './ContentBody.css';

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
                        <AddEventTab />
                    </Route>

                    <Route path='/EditEvent'>
                        <EditEventTab togglePopup={this.props.togglePopup} setPopup={this.props.setPopup}/>
                    </Route>

                    <Route path='/'>
                        <EventsTab />
                    </Route>
                </Switch>
            </div>
        )
    }
}

function Accounts() {
    return (
        <div>
            <div className='widget'><h1>Input Validation Test</h1></div>
            <div className='widget'>
                <ScalableInputController />
                <ScalableInput labelName='Name' validationType='normal'/>
                <ScalableInput labelName='Surname - optional'/>
                <ScalableInput labelName='Email' validationType='email'/>
                <ScalableInput labelName='Mobile Number' validationType='cellNumber'/>
                <ScalableInput labelName='Date' type='date' validationType='normal'/>
                <ScalableInput labelName='Time' type='time' validationType='normal'/>
            </div>
        </div>
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