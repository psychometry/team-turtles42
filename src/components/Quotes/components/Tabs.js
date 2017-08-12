import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import NewList from './NewList';
import NewQuote from './NewQuote';
import '../Quotes.scss';

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
    const { label: listName } = child.props;
    let activeClass = (this.state.selected === i ? 'active' : '');
    return (
        <Menu.Item
          role="tab"
          key={i}
          aria-controls={`panel${i}`}
          name={listName}
          className={activeClass}
          onClick={(event) => this.handleClick(event, i, listName)}
        >
          {child.props.label} 
          <Icon className="remove-list" name="remove" onClick={(event) => this.props.onRemoveList(event, i)} />
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

  handleClick = (event, index, listName) => {
    event.preventDefault();
    this.setState({
      selected: index,
      listName
    });
  }

  render() {
    const { selected: listIndex, listName } = this.state;
    return (
      <div>
        <Menu inverted pointing secondary>
          {this.renderMenu()}
          <NewList onAddList={this.props.onAddList} />  
        </Menu>
        <NewQuote listIndex={listIndex} listName={listName} onAddQuote={this.props.onAddQuote} />
        {this.props.children[this.state.selected]}
      </div>
    );
  }
}

export default Tabs;
