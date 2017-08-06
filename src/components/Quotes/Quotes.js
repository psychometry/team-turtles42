import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import NewList from '../Quotes/NewList';
import SubMenu from './SubMenu';
import './Quotes.scss';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        {
         name: 'Default',
         content: 'Default'
        },
        {
          name: 'Famous',
          content: 'Famous'
        },
      ] 
    };
  }
  addList = (name) => {
    let { tabs } = this.state;
    tabs.push({ name, content: name });
    this.setState({ tabs });
  } 
  removeList = (event, i) => {
    let { tabs } = this.state;
    tabs.splice(i, 1);
    this.setState({ tabs });
  }
  render() {
    const { tabs } = this.state;
    const Pane = (props) => {
      return <div>{props.children}</div>;
    };
    return (
      <div className="Quotes">
        <div className="new-list" style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name='add' />
          <NewList onAddList={this.addList}></NewList>
        </div>
        <SubMenu
          onRemoveList={this.removeList}
          onAddList={this.addList}
          selected={tabs.firstSelect || 0}
          {...this.state}
        >
          {tabs.map(tab =>
            <Pane label={tab.name}>{tab.content}</Pane>)
          }
        </SubMenu>
      </div>
    );
  }
}

export default Quotes;
