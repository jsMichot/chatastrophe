import React, {Component} from 'react';
import {Button, Form, Input} from 'semantic-ui-react';

import AppHeader from '../layout/AppHeader';

export class LoginContainer extends Component {
  state = {
    email: '',
    pasword: '',
  };

  _handleInputChange = (event, {name, value}) => {
    this.setState({[name]: value});
  };

  _handleSubmit = () => {
    const {email, password} = this.state;
  };

  render() {
    const {email, password} = this.state;

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
          <Button className="primary">Enter</Button>
        </Form>
      </div>
    );
  }
}

export default LoginContainer;
