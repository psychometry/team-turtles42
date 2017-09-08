import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from '../components/Tabs';
import GeneralSettingContainer from '../../GeneralSetting/GeneralSettingContainer';
import QuoteSettingsContainer from '../../Quotes/containers/QuoteSettingsContainer';

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
const Settings = styled.div`
  background-color: ${({ theme }) => theme.black};
  z-index: 100;
  display: ${props => props.showing ? 'block' : 'none'};
  height: 500px;
  width: 700px;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 30px;
`;
const Pointer = styled.i`
  display: ${({ showing }) => showing ? 'inline' : 'none'};
  position: relative;
  top: -20px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${({ theme }) => theme.black};
`;
const tabs = [
  {
   name: 'General',
   content: <GeneralSettingContainer />
  },
  {
    name: 'Todo',
    content: 'Todo'
  },
  {
    name: 'Background',
    content: 'Background'
  },
  {
    name: 'Quotes',
    content: <QuoteSettingsContainer />
  },
  {
    name: 'Links',
    content: 'Links'
  }
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

    return (
      <Container showing={showing}>
        <Settings showing={showing}>
          <Tabs activeTab={activeTab} onChangeTab={this.changeTab}>
            {tabs}
          </Tabs>
        </Settings>
        <Pointer showing={showing} />
        <i className={showing ? 'active setting icon' : 'setting icon' } onClick={this.toggleSettings}/>
      </Container>
    );
  }
}

export default SettingsContainer;
