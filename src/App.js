import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Route} from 'react-router-dom';

import './styles';
import Chat from './features/chat/ChatContainer';
import Login from './features/auth/LoginContainer';

class App extends Component {
  state = {user: null};

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user});
      }
    });
  }

  render() {
    return (
      <div id="container">
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Chat} />
      </div>
    );
  }
}

export default hot(module)(App);
