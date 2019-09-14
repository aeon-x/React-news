import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SideBar from './components/sidebar';
import MainPage from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
