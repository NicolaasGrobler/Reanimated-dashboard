import React, { Component } from 'react'
import                           './SidebarItem.css'

export default class SidebarItem extends Component {
    render() {
        return (
            <div name={this.props.name} className={'SidebarItem' + (this.props.active ? ' activeLink' : '')} data-tooltip={this.props.name}  onClick={(e) => {this.props.onClick(e)}}>
                <i className='material-icons sidebarIcon'>{this.props.icon}</i><p className='SidebarItem__link' id='SidebarItem__links'>{this.props.name}</p>
                <div className='SidebarItem__ribbon'/>
            </div>
        )
    }
}
