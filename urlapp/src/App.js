import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expand from './Expand';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to URL App</h1>
          <h3>Please enter any url you would like to shoeten or expand</h3>
        </header>
        <p className="App-intro">
          <form action="">
            <input type="text" placeholder="Enter your url" />
            <div className='btns'>
              <button className="Shorten">SHORTEN</button>
              <button className="expand">EXPAND</button>
            </div>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
