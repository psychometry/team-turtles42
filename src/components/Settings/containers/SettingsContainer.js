import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Tabs from '../../Tabs/Tabs';
import Quotes from '../../Quotes/Quotes';

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
        content: <Quotes />
      }
    ];
    const Pane = (props) => {
      return <div>{props.children}</div>;
    };
    return (
      <div className="SettingsContainer">
        <Tabs
          selected={tabs.firstSelect || 0}
          {...this.state}
        >
          {tabs.map(tab =>
            <Pane label={tab.name}>{tab.content}</Pane>)
          }
        </Tabs>
        <Icon onClick={this.toggleSettings} name="setting" size="large" />
      </div>
    );
  }
}

export default SettingsContainer;
