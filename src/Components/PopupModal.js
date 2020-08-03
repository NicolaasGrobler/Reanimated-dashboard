import React, { Component } from 'react';
import './PopupModal.css';
import $                        from 'jquery';
import ScalableInput from './SmallComponents/ScalableInput';
import ScalableInputController from './SmallComponents/ScalableInputController';

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

    async continueEvent() {
        if ($('#popupInput').val() == 'delete') {
            let eventId = window.location.href.split('?')[1].split('t')[1];

            let result = await fetch(`http://localhost:4545/deleteEvent/${eventId}`, {
                method: 'DELETE',
                mode: 'cors'
            });

            window.location.replace("http://localhost:3000/");
        } else {
            console.log('Hell no!');
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
                    <p>Are you sure you want to delete this event?</p>

                    <div className='popupModalInput'>
                        <input type='text' placeholder='Type delete to continue' id='popupInput'/>
                        <p className='popupErrorMsg'>Please make sure the input is correct.</p>
                        <div className='popupModalButtons'>
                            <button id='popupButton1' onClick={this.continueEvent}>Continue</button>
                            <button id='popupButton2' onClick={this.props.togglePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
