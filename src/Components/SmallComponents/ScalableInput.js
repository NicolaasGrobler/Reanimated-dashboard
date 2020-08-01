import React, { Component } from 'react'
import './ScalableInput.css';
import $ from 'jquery';

export default class ScalableInput extends Component {
    changeInputSize(e) {
        if (e.target.className === 'scalableInput') {
            if (e.target.value) {
                $('#hide').text(e.target.value);
            } else {
                $('#hide').text(e.target.placeholder);
            }
    
            $(e.target).width($('#hide').width());
        }
    }

    render() {
        let txtClassName;

        if ((this.props.type === 'date') || (this.props.type === 'time')) {
            txtClassName = 'Input';
        } else {
            txtClassName = 'scalableInput';
        }

        return (
            <div className='inputGroup'>
                <label>{this.props.labelName}</label><br/>
                <input type={this.props.type} className={txtClassName} placeholder={this.props.labelName} onChange={(e) => this.changeInputSize(e)}/>
            </div>
        )
    }
}
