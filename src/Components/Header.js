import React, { Component } from 'react';
import './Header.css';
import profilePicture from '../assets/profilePicture.jpg';
import RoundImage from './SmallComponents/RoundImage';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='header__logo' contentEditable>{this.props.comapanyName}</h1>
                <RoundImage src={profilePicture} size='40px' className='header__profilePicture'/>
            </div>
        )
    }
}
