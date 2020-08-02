import React, { Component } from 'react'
import './ScalableInput.css';
import $ from 'jquery';

export default class ScalableInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }

        this.changeInputSize = this.changeInputSize.bind(this);
    }

    changeInputSize(e) {
        if (e.target.className === 'scalableInput') {
            if (e.target.value) {
                $('#hide').text(e.target.value);
            } else {
                $('#hide').text(e.target.placeholder);
            }
    
            $(e.target).width($('#hide').width());

            this.setState({
                value: e.target.value
            });
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
                <input id={this.props.inputId} type={this.props.type} className={txtClassName} placeholder={this.props.labelName} onChange={(e) => this.changeInputSize(e)} value={this.state.value}/>
            </div>
        )
    }
}
