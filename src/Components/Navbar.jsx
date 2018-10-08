import React from 'react';

import logo from '../logo.svg';

const Navbar = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div className="container">
    <img src={logo} className="App-logo" alt="logo" />
      <a className="navbar-brand" href="/">Phone No Generator</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
      </div>
    </div>
  </nav>;

export default Navbar;
