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

        //Realtime validation
        const validationType = this.props.validationType;
        switch(true){
            case (validationType == 'normal'): 
                if(!(e.target.value.length > 0)){
                    $(e.target).css('borderColor', 'tomato'); 
                    $(e.target).attr('data-isInputValid', false);
                } else {
                    $(e.target).css('borderColor', 'white'); 
                    $(e.target).attr('data-isInputValid', true);
                }
                break;
            case (validationType == 'cellNumber'):
                if((e.target.value.replace(/\s/g, '').length != 10) || !(e.target.value.replace(/\s/g, '').match(/^[0-9]+$/))){
                    $(e.target).css('borderColor', 'tomato'); 
                    $(e.target).attr('data-isInputValid', false);
                } else {
                    $(e.target).css('borderColor', 'white'); 
                    $(e.target).attr('data-isInputValid', true);
                }
                break; 
            case (validationType == 'email'):
                if(!(this.ValidateEmail(e.target.value))){
                    $(e.target).css('borderColor', 'tomato'); 
                    $(e.target).attr('data-isInputValid', false);
                } else {
                    $(e.target).css('borderColor', 'white'); 
                    $(e.target).attr('data-isInputValid', true);
                }
                break;
            default:
                break;
        }
    }

    ValidateEmail(mail){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            return (true)
        }
        return (false)
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
                <input id={this.props.inputId} type={this.props.type} className={txtClassName} placeholder={this.props.labelName} onChange={(e) => this.changeInputSize(e)} value={this.state.value} data-isInputValid={true}/>
            </div>
        )
    }
}
