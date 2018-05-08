import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Test routing: <Link to="/pdp">PDP</Link> or <Link to="/PLP">PLP</Link>
      </div>
    );
  }
}

export default App;
