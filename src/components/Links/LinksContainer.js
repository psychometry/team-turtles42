import React, { Component } from 'react';
import Links from './Links';
import toggleOnOff from '../../HOC';

class LinksContainer extends Component {
  render() {
    return (
      <Links />
    );
  }
}

export default toggleOnOff(LinksContainer);

