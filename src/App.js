import React, { Component } from 'react';

import './App.css';

import Navbar from './Components/Navbar';
import Numbers from './Components/Numbers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main role="main" className="container">
          <Numbers />
        </main>
      </div>
    );
  }
}

export default App;
