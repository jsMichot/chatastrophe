import React, {Component} from 'react';
import {Button, Form, Input} from 'semantic-ui-react';

import AppHeader from '../layout/AppHeader';

export class LoginContainer extends Component {
  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <AppHeader />
        <Form>
          <span>Log in / Sign up</span>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="primary">Enter</Button>
        </Form>
      </div>
    );
  }
}

export default LoginContainer;
