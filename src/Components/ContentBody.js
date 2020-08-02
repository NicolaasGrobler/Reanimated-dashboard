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
                        <EditEventTab />
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