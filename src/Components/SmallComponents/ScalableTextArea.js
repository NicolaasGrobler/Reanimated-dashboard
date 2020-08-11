import React, { Component } from 'react';
import './ScalableTextArea.css';
import $ from 'jquery';
import { realTimeValidation } from '../../UtilsFunctions/utilFunctions';

export default class ScalableTextArea extends Component {
    changeHeight(e) {

        $(e.target).css('height', 'auto');
        $(e.target).attr('data-changesmade', true);

        let descriptionBoxScrollHeight = e.target.scrollHeight;

        $(e.target).css('height', descriptionBoxScrollHeight + 4);

        //Realtime validation
        realTimeValidation(e.target, this.props.validationType);
    }

    componentDidMount(){
        $('#descriptionBox').css('height', 'auto');
        let descriptionBoxScrollHeight = document.getElementById('descriptionBox').scrollHeight;
        document.getElementById('descriptionBox').style.height = descriptionBoxScrollHeight + 4 + 'px';
    }

    render() {
        return (
            <div className='ScalableTextArea'>
                <label>{this.props.labelName}</label><br/>
                <textarea rows='1' id='descriptionBox' placeholder={this.props.placeholder} onChange={(e) => {this.changeHeight(e)}} data-isinputvalid={true} data-changesmade={false}></textarea> 
            </div>
        )
    }
}
