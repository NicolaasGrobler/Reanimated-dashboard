import React, { Component } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarComponents/SidebarItem';
import $ from 'jquery';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: 'Home'
        }

        this.changeActiveButton = this.changeActiveButton.bind(this);
    }

    changeActiveButton(e) {     
        this.setState({
            activeButton: $(e.currentTarget).attr('name')
        })
    }

    render() {
        return (
            <div className='sidebar'>
                <SidebarItem name='Home' icon='home' tooltip='Home' active={this.state.activeButton === 'Home' ? true : false} onClick={(e) => this.changeActiveButton(e)}/>
                <SidebarItem name='Accounts' icon='account_balance_wallet' active={this.state.activeButton === 'Accounts' ? true : false} onClick={(e) => this.changeActiveButton(e)}/>
                <SidebarItem name='Meetings' icon='meeting_room' active={this.state.activeButton === 'Meetings' ? true : false} onClick={(e) => this.changeActiveButton(e)}/>
                <SidebarItem name='Security' icon='lock' active={this.state.activeButton === 'Security' ? true : false} onClick={(e) => this.changeActiveButton(e)}/>
                <SidebarItem name='Users' icon='person' active={this.state.activeButton === 'Users' ? true : false} onClick={(e) => this.changeActiveButton(e)}/>
            </div>
    )}
};