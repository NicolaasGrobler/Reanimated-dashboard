import React, { Component } from 'react';
import SidebarItem          from './SidebarComponents/SidebarItem';
import { Link }             from "react-router-dom";
import $                    from 'jquery';
import './Sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: 'Events'
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
                <Link to='/' className='Link'><SidebarItem name='Events' icon='event' tooltip='Events' active={this.state.activeButton === 'Events' ? true : false} onClick={(e) => this.changeActiveButton(e)}/></Link>
                {/* <Link to='/Accounts' className='Link'><SidebarItem name='Accounts' icon='account_balance_wallet' active={this.state.activeButton === 'Accounts' ? true : false} onClick={(e) => this.changeActiveButton(e)}/></Link>
                <Link to='/Meetings' className='Link'><SidebarItem name='Meetings' icon='meeting_room' active={this.state.activeButton === 'Meetings' ? true : false} onClick={(e) => this.changeActiveButton(e)}/></Link>
                <Link to='/Security' className='Link'><SidebarItem name='Security' icon='lock' active={this.state.activeButton === 'Security' ? true : false} onClick={(e) => this.changeActiveButton(e)}/></Link>
                <Link to='/Users' className='Link'><SidebarItem name='Users' icon='person' active={this.state.activeButton === 'Users' ? true : false} onClick={(e) => this.changeActiveButton(e)}/></Link> */}
            </div>
    )}
};