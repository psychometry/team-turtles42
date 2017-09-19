import React, { Component } from 'react';
import styled from 'styled-components';
import notify from '../Timer/notify.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Notification = styled.label`
  display: flex;
  margin: 10px 0;
  label {
    flex: 0 0 100px;
    i {
      opacity: .75;
      cursor: pointer;
      margin-right: 10px !important;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
const Checkbox = styled.input`
  cursor: pointer;
  height: 1.2em;
  width: 1.2em;
`;

class TimerSettings extends Component {
  render() {
    const { settings, onToggleNotification } = this.props;
    const { bell, desktop } = settings;

    return (
      <Container>
        <h3>Notifications</h3>
        <Notification>
          <label>
            <i
            className="bell icon" 
            onClick={() => notify(null, { bell: true, desktop: false })}
            />
            Bell
          </label>
          <Checkbox 
            type='checkbox' checked={bell} 
            onChange={() => onToggleNotification('bell')}
          />
        </Notification>
        <Notification>
          <label>
            <i
              className="send icon" 
              onClick={() => notify(null, { bell: false, desktop: true })}
            />
            Desktop
          </label>
          <Checkbox 
            type='checkbox' checked={desktop} 
            onChange={() => onToggleNotification('desktop')}
          />
        </Notification>
      </Container>
    );
  }
}

export default TimerSettings;