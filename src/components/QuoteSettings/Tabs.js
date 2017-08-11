import React, { Component } from 'react';
import v4 from 'node-uuid';
import { Menu, Icon } from 'semantic-ui-react';
import NewList from './NewList';
import NewQuote from './NewQuote';
import './QuoteSettings.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      isCurrentList: false
    };
  }
  handleChange = (event) => {
    
  }
  renderMenuItems = (child, i) => {
    let activeClass = (this.state.selected === i ? 'active' : '');
    return (
        <Menu.Item
          role="tab"
          key={i}
          aria-controls={`panel${i}`}
          name=""
          className={activeClass}
          onClick={(event) => this.handleClick(event, i)}
        >
          {child.props.label} 
          <Icon style={{ marginLeft: '5px' }} name="remove" onClick={(event) => this.props.onRemoveList(event, i)} />
        </Menu.Item>
    );
  }
  renderMenu() {
   return (
        <div className="sub-menu tabs__labels" role="tab list">
          {this.props.children.map(this.renderMenuItems)}
        </div>
    );
  }

  handleClick = (event, index) => {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    const { selected: listIndex } = this.state;
    return (
      <div>
        <Menu inverted pointing secondary>
          {this.renderMenu()}
          <NewList onAddList={this.props.onAddList} />  
        </Menu>
        <NewQuote listIndex={listIndex} onAddQuote={this.props.onAddQuote} />
        {this.props.children[this.state.selected]}
      </div>
    );
  }
}

export default Tabs;
