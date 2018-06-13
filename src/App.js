import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import './styles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="Header">
          <h1>Chatastrophe</h1>
          <img src="assets/icon.png" id="test-image" alt="heart" />
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
