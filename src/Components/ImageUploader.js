import React, { Component }     from 'react';
import $                        from 'jquery';
import                          './ImageUploader.css';

let currentFile;

export default class ImageUploader extends Component {
    triggerFileUpload() {
        $('#fileUploadField').click();
    }

    async uploadFile() {
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

    fileChosen(e) { 
        if (e.target.files[0]) {
            let tmppath = URL.createObjectURL(e.target.files[0]);
            $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

            currentFile = e.target.files[0];
        }
    }

    fileDrop(e) {        
        let files = e.dataTransfer.files;
        console.log(files);

        let tmppath = URL.createObjectURL(files[0]);
        $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

        currentFile = files[0];

        e.currentTarget.style.borderColor = 'rgb(0, 0, 0)';
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
                >
                    <div className='dropzoneOverlay'></div>
                    <p>Drop file here or click anywhere in the box to browse</p>
                </div>
                <button onClick={this.uploadFile}>Upload</button>
            </div>
        )
    }
}
