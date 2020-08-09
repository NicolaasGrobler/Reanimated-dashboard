import React, { Component }     from 'react';
import $                        from 'jquery';
import                          './ImageUploader.css';

let currentFile;
let fileURL;
let fileName;

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.uploadFile = this.uploadFile.bind(this);
    }

    triggerFileUpload() {
        $('#fileUploadField').click();
    }

    async uploadFile() {
        if (currentFile) {
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

            fileURL = result.filepath;
            console.log('Uploaded');
            document.getElementById('fileUploadButton').setAttribute('data-isInputValid', true);
            document.getElementById('fileUploadButton').style.borderColor = '';
            document.getElementById('fileUploadText').innerText = 'Image Uploaded';
            document.getElementById('fileUploadText').style.opacity = 1;

            this.props.setImageURL(this.getName());
        } else {
            document.getElementById('fileUploadText').innerText = 'Please choose an image first';
            document.getElementById('fileUploadText').style.opacity = 1;
        }
    }

    fileChosen(e) { 
        if (e.target.files[0]) {
            let tmppath = URL.createObjectURL(e.target.files[0]);
            $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

            currentFile = e.target.files[0];
            fileName = currentFile.name;
            document.getElementById('dropzone').style.borderColor = '';
            document.getElementById('dropzone').setAttribute('data-isInputValid', true);
            document.getElementById('fileUploadButton').setAttribute('data-isInputValid', false);
            document.getElementById('fileUploadText').innerText = 'Click me to save image';
            document.getElementById('fileUploadText').style.opacity = 1;
        }
    }

    fileDrop(e) {        
        let files = e.dataTransfer.files;
        console.log(files);

        let tmppath = URL.createObjectURL(files[0]);
        $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');
        document.getElementById('dropzone').setAttribute('data-isInputValid', true);
        document.getElementById('fileUploadButton').setAttribute('data-isInputValid', false);
        document.getElementById('fileUploadText').innerText = 'Click me to save image';
        document.getElementById('fileUploadText').style.opacity = 1;

        currentFile = files[0];
        fileName = currentFile.name;

        $(e.currentTarget).css('borderColor', '');
    }

    getUrl() {
        return fileURL;
    }

    getName() {
        return fileName;
    }

    render() {
        return (
            <div>
                <input id='fileUploadField' type='file' name='file' onChange={(e) => this.fileChosen(e)}/>
                <div 
                    className='dropzone' 
                    id='dropzone' 
                    onClick={this.triggerFileUpload} 
                    onDrop={(e) => this.fileDrop(e)} 
                    onDragEnter={(e) => e.currentTarget.style.borderColor = 'rgb(78, 95, 255)'}
                    onDragOver={(e) => e.currentTarget.style.borderColor = 'rgb(78, 95, 255)'} 
                    onDragLeave={(e) => e.currentTarget.style.borderColor = 'rgb(0, 0, 0)'}
                    data-isInputValid={false}
                >
                    <div className='dropzoneOverlay'></div>
                    <p>Drop file here or click anywhere in the box to browse</p>
                </div>
                <div className='widgetContainer components'>
                    <button onClick={this.uploadFile} id='fileUploadButton' data-isInputValid={false}>{this.props.buttonText}</button>
                    <p className='successText' id='fileUploadText'>Image Uploaded</p>
                </div>
            </div>
        )
    }
}
