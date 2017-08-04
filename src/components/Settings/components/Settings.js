import React from 'react';
import './Settings.scss';

const Settings = ({ showing }) => {
  let settingsClassName = 'Settings';
  if (showing) {
    settingsClassName += ' showing';
  }
  return (
    <div className={settingsClassName}>
      Settings
    </div>
  );
};

export default Settings;
