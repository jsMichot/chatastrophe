import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';

class AppHeader extends Component {
  render() {
    return (
      <div id="Header">
        <img src="assets/icon.png" alt="logo" />
        <Header as="h1">Chatastrophe</Header>
      </div>
    );
  }
}

export default AppHeader;
