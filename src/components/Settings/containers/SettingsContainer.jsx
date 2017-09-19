import React, { Component } from 'react';
import styled from 'styled-components';
import Settings from '../components/Settings';
import GeneralSettingContainer from '../../GeneralSetting/GeneralSettingContainer';
import QuoteSettingsContainer from '../../Quotes/containers/QuoteSettingsContainer';
import BgSettingContainer from '../../BgSetting/BgSettingContainer';
import TimerSettingsContainer from '../../TimerSettings/TimerSettingsContainer.js';

const Container = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 20px;
  left: 10px;
  .setting.icon {
    opacity: .75;
    position: absolute;
    bottom: 0;
    left: 14px;
    font-size: 1.8em;
    cursor: pointer;
    text-shadow: 0 1px 5px ${({ theme }) => theme.black};
  }
  .active {
    opacity: 1;
  }
`;

const tabs = [
  {
   name: 'General',
   content: <GeneralSettingContainer />
  },
  {
    name: 'Timer',
    content: <TimerSettingsContainer />
  },
  {
    name: 'Background',
    content: <BgSettingContainer/>
  },
  {
    name: 'Quotes',
    content: <QuoteSettingsContainer />
  },
];

class SettingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      showing: false,
      activeTab: 0,
    };
  }

  toggleSettings = () => {
    this.setState({
      showing: this.state.showing ? false : true
    });
  }

  changeTab = (index) => {
    this.setState({ activeTab: index });
  }

  render() {
    const { showing, activeTab} = this.state;
    let settingsClassName = 'ignore-react-onclickoutside setting icon';
    if (showing) {
      settingsClassName += ' active';
    }

    return (
      <Container showing={showing}>
      {showing && 
        <Settings 
          showing={showing}
          activeTab={activeTab}
          tabs={tabs}
          onChangeTab={this.changeTab}
          onToggleSettings={this.toggleSettings}
        />
      }
        <i className={settingsClassName} onClick={()=>this.toggleSettings()}/>
      </Container>
    );
  }
}

export default SettingsContainer;
