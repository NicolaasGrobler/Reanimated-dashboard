import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ContentBody from './Components/ContentBody';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      sidebarCollapsed: false
    }
  }

  async componentDidMount() {
    
  }

  render() {
    return (
      <div className="app">
        <Header comapanyName='company.'/>
        <div className='app__belowHeader'>
          <Sidebar />
          <ContentBody />
        </div>
      </div>
    );
  }
}

export default App;
