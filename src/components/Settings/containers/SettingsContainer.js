import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Settings from '../components/Settings';
import './SettingsContainer.scss';

class SettingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      showing: false
    };
  }

  toggleSettings = () => {
    this.setState({
      showing: this.state.showing ? false : true
    });
  }
  render() {
    return (
      <div className="SettingsContainer">
        <Settings showing={this.state.showing} />
        <Icon onClick={this.toggleSettings} name="setting" size="large" />
      </div>
    );
  }
}

export default SettingsContainer;