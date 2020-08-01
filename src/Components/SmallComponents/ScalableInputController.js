import React, { Component } from 'react';
import $ from 'jquery';
import './ScalableInputController.css';

export default class ScalableInputController extends Component {
    componentDidMount() {
        let nameInputs = document.getElementsByClassName('scalableInput');

        Object.keys(nameInputs).forEach(key => {
            $('#hide').text(nameInputs[key].placeholder);
            $(nameInputs[key]).width($('#hide').width());
        });
    }

    render() {
        return (
            <span id="hide"></span>
        )
    }
}
