import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ComponentHeader from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentHeader/>
        <h1> 何老版! </h1>
      </div>
    );
  }
}

export default App;
