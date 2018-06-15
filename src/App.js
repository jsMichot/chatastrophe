import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import './styles';
import LoginContainer from './features/auth/LoginContainer';

class App extends Component {
  render() {
    return <LoginContainer />;
  }
}

export default hot(module)(App);
