import React, { Component } from 'react';
import './InputFile.css';

export default class InputFile extends Component {
    render() {
        return (
            <div className='InputFile'>
                <label className='InputFileTitle'>{this.props.titleName}</label><br/>
                <input type="file" name="file" id="file" className="inputfile" />
                <label htmlFor="file" className='inputFileLabel'>Choose a file</label>
            </div>
        )
    }
}
