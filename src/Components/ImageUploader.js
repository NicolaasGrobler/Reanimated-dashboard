import React, { Component }     from 'react';
import $                        from 'jquery';
import                          './ImageUploader.css';

let currentFile;
let fileName;

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstCall: true
        }

        this.passData = this.passData.bind(this);
        this.fileChosen = this.fileChosen.bind(this);
        this.fileDrop = this.fileDrop.bind(this);
    }

    triggerFileUpload() {
        $('#fileUploadField').click();
    }

    passData(currentFile1, currentName1) {
        this.props.getData(currentFile1, currentName1);
    }

    // async uploadFile() {
    //     if (currentFile) {

    //         if (fileName) {
    //             await fetch(`http://localhost:4545/deleteFile/${fileName}`, {
    //                 method: 'POST'
    //             });
    //         }

    //         let formData = new FormData();
    //         let fileField = document.querySelector('#fileUploadField');
    
    //         formData.append('file', currentFile);
    
    //         let result = await fetch('http://localhost:4545/uploadFile', {
    //             method: 'POST',
    //             body: formData
    //         }).then((res) => {
    //             return res.json();
    //         });

    //         fileURL = result.filepath;
    //         document.getElementById('fileUploadButton').setAttribute('data-isinputvalid', true);
    //         document.getElementById('fileUploadButton').style.borderColor = '';
    //         document.getElementById('fileUploadText').innerText = 'Image Uploaded';
    //         document.getElementById('fileUploadText').style.opacity = 1;

    //         fileName = result.fileName;

    //         this.props.setImageURL(this.getName());
    //     } else {
    //         document.getElementById('fileUploadText').innerText = 'Please choose an image first';
    //         document.getElementById('fileUploadText').style.opacity = 1;
    //     }
    // }

    fileChosen(e) { 
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            let tmppath = URL.createObjectURL(e.target.files[0]);
            $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');

            currentFile = e.target.files[0];
            document.getElementById('dropzone').style.borderColor = '';
            document.getElementById('dropzone').setAttribute('data-isinputvalid', true);
        }

        this.passData(currentFile,fileName);
    }

    fileDrop(e) {        
        let files = e.dataTransfer.files;
        console.log(files);

        let tmppath = URL.createObjectURL(files[0]);
        $('.dropzone').css('backgroundImage', 'url(' + tmppath + ')');
        document.getElementById('dropzone').setAttribute('data-isinputvalid', true);

        currentFile = files[0];

        $(e.currentTarget).css('borderColor', '');

        this.passData(currentFile,fileName);
    }

    getName() {
        return fileName;
    }

    async componentDidUpdate() {
        if (this.state.firstCall) {
            if (this.props.backgroundImg) {
                document.getElementById('dropzone').style.backgroundImage = `URL(${this.props.backgroundImg})`;
            }   

            await this.setState({
                firstCall: false
            })
        }

        let temp = document.getElementById('dropzone').style.backgroundImage;
        temp = temp.split('/');
        temp = temp[temp.length - 1];
        temp = temp.substring(0, temp.length - 2);

        fileName = temp;
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
                    data-isinputvalid={false}
                >
                    <div className='dropzoneOverlay'></div>
                    <p>Drop file here or click anywhere in the box to browse</p>
                </div>
            </div>
        )
    }
}
