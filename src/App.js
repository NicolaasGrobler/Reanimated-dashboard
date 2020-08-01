import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ContentBody from './Components/ContentBody';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      sidebarCollapsed: false
    }
  }

  render() {
    return (
      
        <div className="app">
          <Header comapanyName='company.'/>
          <div className='app__belowHeader'>
          <Router>
            <Sidebar />  
            <ContentBody />
          </Router>
          </div>
        </div>
    );
  }
}

export default App;