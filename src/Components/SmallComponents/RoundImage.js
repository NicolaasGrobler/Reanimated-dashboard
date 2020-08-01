import React, { Component } from 'react';
import './RoundImage.css';

export default class RoundImage extends Component {
    render() {
        return (
            <div className={`RoundImage ${this.props.className}`} style={{width: this.props.size, height: this.props.size}}>
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}
