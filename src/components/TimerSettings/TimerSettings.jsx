import React, { Component } from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`;

class TimerSettings extends Component {
  render() {
    console.log(this.props);
    const { settings, onToggleNotification } = this.props;
    const { bell, notification } = settings;

    return (
      <div>
        Timer Settings
        <Checkbox 
          type='checkbox' checked={bell} 
          onChange={() => onToggleNotification('bell')}
        />
        <Checkbox 
          type='checkbox' checked={notification} 
          onChange={() => onToggleNotification('notification')}
        />
      </div>
    );
  }
}

export default TimerSettings;