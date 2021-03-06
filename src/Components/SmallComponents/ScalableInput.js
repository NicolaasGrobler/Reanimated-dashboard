import React, { Component } from 'react'
import './ScalableInput.css';
import $ from 'jquery';
import { realTimeValidation } from '../../UtilsFunctions/utilFunctions';

export default class ScalableInput extends Component {
    constructor(props) {
        super(props);

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
        }

        

        $(e.target).attr('data-changesmade', true);

        //Realtime validation
        realTimeValidation(e.target, this.props.validationType);
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
                <input id={this.props.inputId} type={this.props.type} className={txtClassName} placeholder={this.props.placeholder ? this.props.placeholder : this.props.labelName} onChange={(e) => this.changeInputSize(e)} data-isinputvalid={this.props.emptyFirst ? true : false} data-changesmade={false}/>
            </div>
        )
    }
}
