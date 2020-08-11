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