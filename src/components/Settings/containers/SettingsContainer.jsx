import React, { Component } from 'react';
import styled from 'styled-components';
import Settings from '../components/Settings';
import GeneralSettingContainer from '../../GeneralSetting/GeneralSettingContainer';
import QuoteSettingsContainer from '../../Quotes/containers/QuoteSettingsContainer';
import BgSettingContainer from '../../BgSetting/BgSettingContainer';

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

  // tried to add close settings on Clicks Outside, but seems to trigger a bug in
  // styled-components, for some reason it's recieving props that was not given when
  // child-components dispatch events.


  // handleClick=()=>{
  //   if (!this.state.showing) {
  //     document.addEventListener('click', this.handleOutsideClick, false);
  //   } else {
  //     document.removeEventListener('click', this.handleOutsideClick, false);
  //   }
  //   this.toggleSettings();
  // }
  // handleOutsideClick=(e)=>{
  //   console.log(this.node);
  //   console.log(e.target);
  //   if(this.node.contains(e.target)){
  //     return;
  //   }
  //   this.handleClick();
  // }

  render() {
    const { showing, activeTab} = this.state;
    let settingsClassName = 'ignore-react-onclickoutside setting icon';
    if (showing) {
      settingsClassName += ' active';
    }

    return (
      <Container showing={showing}>
      {/*innerRef meant for close setting on outside click*/}
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
