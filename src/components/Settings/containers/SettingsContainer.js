import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Tabs from '../components/Tabs';
import QuotesContainer from '../../Quotes/containers/QuotesContainer';

const tabs = [
  {
   name: 'General',
   content: 'General'
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
    content: <QuotesContainer />
  }
];

const Pane = (props) => {
  return <div>{props.children}</div>;
};

class SettingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      showing: false,
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
        <Tabs
          active={0}
          {...this.state}
        >
          {tabs.map(tab =>
            <Pane key={tab.name} label={tab.name}>
              {tab.content}
            </Pane>)
          }
        </Tabs>
        <Icon onClick={this.toggleSettings} name="setting" size="large" />
      </div>
    );
  }
}

export default SettingsContainer;



