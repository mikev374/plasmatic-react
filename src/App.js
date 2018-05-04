import React, { Component } from 'react';
import logo from './green-button.png';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Green Button Data</h1>
        </header>
        <p className="App-buttons">
          <RaisedButton>Display Recent 24 Hour Usage</RaisedButton>
          <RaisedButton>Display Weekly Usage</RaisedButton>
          <RaisedButton>Display Monthy Usage</RaisedButton>
          <RaisedButton>Display All-Time Usage</RaisedButton>
          <RaisedButton>Upload (Add)</RaisedButton>
        </p>
      </div>    
    );
  }
}

export default App;
