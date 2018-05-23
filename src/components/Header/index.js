import React, { Component } from 'react';

import logo from './logo.svg';
import './Header.css';
import Navigation from '../Navigation';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            React-e-com
            <span role="img" aria-label="booom">
              💥
            </span>
          </h1>
        </header>
        <Navigation />
      </div>
    );
  }
}
export default Header;
