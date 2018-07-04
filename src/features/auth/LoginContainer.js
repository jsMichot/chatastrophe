import React, {Component} from 'react';
import {Button, Form, Input} from 'semantic-ui-react';

import AppHeader from '../layout/AppHeader';

export class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  _handleInputChange = (event, {name, value}) => {
    this.setState({[name]: value});
  };

  _handleSignup = async () => {
    const {email, password} = this.state;
    try {
      const user = await window.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      this.setState({error: ''});
      console.log('successful signup: ', user);
    } catch ({message}) {
      this.setState({error: message});
    }
  };

  _handleLogin = async () => {
    const {email, password} = this.state;

    try {
      const user = await window.firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      this.setState({error: ''});
      console.log('successful login: ', user);
    } catch ({code, message}) {
      if (code === 'auth/user-not-found') {
        await this._handleSignup();
      } else {
        this.setState({error: message});
      }
    }
  };

  _handleSubmit = async event => {
    const {email, password} = this.state;
    event.preventDefault();

    if (email && password) {
      await this._handleLogin();
    } else {
      this.setState({error: 'Please fill in both fields.'});
    }
  };

  render() {
    const {email, password, error} = this.state;

    return (
      <div id="LoginContainer" className="inner-container">
        <AppHeader />
        <Form onSubmit={this._handleSubmit}>
          <span>Log in / Sign up</span>
          <Input
            name="email"
            value={email}
            placeholder="Email"
            onChange={this._handleInputChange}
          />
          <Input
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this._handleInputChange}
          />
          <span>{error}</span>
          <Button className="primary">Enter</Button>
        </Form>
      </div>
    );
  }
}

export default LoginContainer;
