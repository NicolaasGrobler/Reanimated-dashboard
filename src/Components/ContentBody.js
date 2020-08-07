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
    async function uploadFile() {
        console.log('Uploading')
        let formData = new FormData();
        let fileField = document.querySelector('#fileUploadField');

        formData.append('file', fileField.files[0]);

        let result = await fetch('http://localhost:4545/uploadFile', {
            method: 'POST',
            body: formData
        }).then((res) => {
            return res.json();
        });

        document.querySelector('#filepath').innerHTML = `File path: ${result.filepath}`;
    }

    return (
        <div>
            <div className='widget'><h1>File upload test</h1></div>
            <div className='widget'>
                <ScalableInputController />
                <input id='fileUploadField' type='file' name='file'/>
                <button onClick={uploadFile}>Upload</button>

                <p id='filepath'>File path: </p>
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