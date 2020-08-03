import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ContentBody from './Components/ContentBody';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PopupModal from './Components/PopupModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      sidebarCollapsed: false,
      popup: false,
      popupElem: null
    }

    this.togglePopup = this.togglePopup.bind(this);
  }

  async togglePopup() {
    console.log('Hello')

    if (await this.state.popup) {
      $('.popupOverlay').animate({opacity: 0}, 300, async () => {
        await this.setState({
          popup: false,
          popupElem: null
        });
      });
    } else {
      await this.setState({
        popup: true,
        popupElem: <PopupModal togglePopup={this.togglePopup}/>
      });
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.popup ? this.state.popupElem : null}

        <Header comapanyName='company.'/>
        <div className='app__belowHeader'>
        <Router>
          <Sidebar />  
          <ContentBody togglePopup={this.togglePopup}/>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;