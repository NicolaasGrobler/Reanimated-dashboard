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
    let currentFile;

    function triggerFileUpload() {
        $('#fileUploadField').click();
    }

    async function uploadFile() {
        console.log('Uploading')
        let formData = new FormData();
        let fileField = document.querySelector('#fileUploadField');

        formData.append('file', currentFile);

        let result = await fetch('http://localhost:4545/uploadFile', {
            method: 'POST',
            body: formData
        }).then((res) => {
            return res.json();
        });
    }

    function fileChosen(e) { 
        if (e.target.files[0]) {
            let tmppath = URL.createObjectURL(e.target.files[0]);
            $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

            currentFile = e.target.files[0];
        }
    }

    function fileDrop(e) {        
        let files = e.dataTransfer.files;
        console.log(files);

        let tmppath = URL.createObjectURL(files[0]);
        $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

        currentFile = files[0];

        e.currentTarget.style.borderColor = 'rgb(0, 0, 0)';
    }

    return (
        <div>
            <div className='widget'><h1>File upload test</h1></div>
            <div className='widget'>
                <input id='fileUploadField' type='file' name='file' onChange={(e) => fileChosen(e)}/>
                <div 
                    className='dropzone' 
                    id='dropzone' 
                    onClick={triggerFileUpload} 
                    onDrop={(e) => fileDrop(e)} 
                    onDragEnter={(e) => e.currentTarget.style.borderColor = 'rgb(78, 95, 255)'}
                    onDragOver={(e) => e.currentTarget.style.borderColor = 'rgb(78, 95, 255)'} 
                    onDragLeave={(e) => e.currentTarget.style.borderColor = 'rgb(0, 0, 0)'}
                >
                    <div className='dropzoneOverlay'></div>
                    <p>Drop file here or click anywhere in the box to browse</p>
                </div>
                <button onClick={uploadFile}>Upload</button>
            </div>
        </div>
    );
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