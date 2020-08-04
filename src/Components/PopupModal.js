import React, { Component }     from 'react';
import $                        from 'jquery';
import ScalableInput            from './SmallComponents/ScalableInput';
import ScalableInputController  from './SmallComponents/ScalableInputController';
import './PopupModal.css';

$(window).resize(() => {
    $('#popup').css('left', ($(window).innerWidth() / 2) - ($('#popup').innerWidth() / 2) + 'px');
    $('#popup').css('top', ($(window).innerHeight() / 2) - ($('#popup').innerHeight() / 2) + 'px');
});

//This popup is used to confirm an action

export default class PopupModal extends Component {
    componentDidMount() {
        $('#popup').css('left', ($(window).innerWidth() / 2) - ($('#popup').innerWidth() / 2) + 'px');
        $('#popup').css('top', ($(window).innerHeight() / 2) - ($('#popup').innerHeight() / 2) + 'px');
        $('.popupOverlay').animate({opacity: 1}, 400);
    }

    continueEvent(functionToRun) {
        if ($('#popupInput').val() == this.props.keyword) {
            functionToRun();
        } else {
            $('#popupInput').css('borderColor', 'tomato');
            $('.popupErrorMsg').css('display', 'block');
            $('.popupErrorMsg').animate({height: 35}, 150, () => {
                $('.popupErrorMsg').animate({opacity: 1}, 300)
            });
        }
    }

    render() {
        return (
            <div className='popupOverlay'>
                <div className='popupModal' id='popup'>
                    <p>{this.props.title}</p>

                    <div className='popupModalInput'>
                        <input type='text' placeholder={`Type ${this.props.keyword} to continue`} id='popupInput'/>
                        <p className='popupErrorMsg'>Please make sure the input is correct.</p>
                        <div className='popupModalButtons'>
                            <button id='popupButton1' onClick={(functionToRun) => this.continueEvent(this.props.continueEvent)}>Continue</button>
                            <button id='popupButton2' onClick={this.props.togglePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
