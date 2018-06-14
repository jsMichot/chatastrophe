import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import './styles';
import LoginContainer from './features/auth/LoginContainer';

class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    );
  }
}

export default hot(module)(App);
