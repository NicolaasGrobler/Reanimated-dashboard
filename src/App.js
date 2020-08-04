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
      popupElem: null,
      popupToShow: null
    }

    this.togglePopup = this.togglePopup.bind(this);
    this.setPopup = this.setPopup.bind(this);
  }

  async togglePopup() {
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
        popupElem: this.state.popupToShow
      });
    }
  }

  async setPopup(popupElem) {
    await this.setState({
      popupToShow: popupElem
    });

    console.log('Done!');
  }

  render() {
    return (
      <div className="app">
        {this.state.popup ? this.state.popupElem : null}

        <Header comapanyName={process.env.REACT_APP_COMPANY_NAME}/>
        <div className='app__belowHeader'>
        <Router>
          <Sidebar />  
          <ContentBody togglePopup={this.togglePopup} setPopup={this.setPopup}/>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;