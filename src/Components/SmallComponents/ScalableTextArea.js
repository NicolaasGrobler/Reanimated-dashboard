import React, { Component } from 'react';
import './ScalableTextArea.css';
import $ from 'jquery';

export default class ScalableTextArea extends Component {
    changeHeight(e) {

        $(e.target).css('height', 'auto');

        let descriptionBoxScrollHeight = e.target.scrollHeight;

        $(e.target).css('height', descriptionBoxScrollHeight);
    }

    // componentDidMount() {
    //     $('#descriptionBox').css('height', 'auto');

    //     let descriptionBoxScrollHeight = document.getElementById('descriptionBox').scrollHeight;

    //     document.getElementById('descriptionBox').style.height = descriptionBoxScrollHeight + ;
    //     // $('#descriptionBox').css('height', descriptionBoxScrollHeight);
    // }

    render() {
        return (
            <div className='ScalableTextArea'>
                <label>{this.props.labelName}</label><br/>
                <textarea rows='1' id='descriptionBox' placeholder={this.props.placeholder} onChange={(e) => {this.changeHeight(e)}}></textarea> 
            </div>
        )
    }
}
