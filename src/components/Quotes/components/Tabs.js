import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import NewList from './NewList';
import NewQuote from './NewQuote';
import Quotes from './Quotes';
import '../Quotes.scss';

const propTypes = {
  lists: PropTypes.array.isRequired,
  onAddList: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  // TODO: onUpdateList: Proptypes.func.isRequired,
  onAddQuote: PropTypes.func.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.defaultList.name
    };
  }
  setList() {
    const list = this.props.lists.filter(list => {
      return list.name === this.state.active;
    })[0];

    return list ? list : this.props.defaultList;
  }
  changeList = (listName) => {
    this.setState({ active: listName });
  }
  render() {
    const { 
      lists, 
      onAddList,
      onRemoveList, 
      // onUpdateList, 
      onAddQuote,
      onRemoveQuote, 
      onUpdateQuote 
    } = this.props;

    const { active } = this.state;
    
    return (
      <div className="Quote-Lists">
        <Menu
          active={active}
          onChangeList={this.changeList}
          lists={lists} 
          onAddList={onAddList}
          onRemoveList={onRemoveList}
        /> 
        <NewList onAddList={onAddList} />  
        <NewQuote listName={active} onAddQuote={onAddQuote} />
        <Quotes 
          list={this.setList()} 
          onRemoveQuote={onRemoveQuote}
          onUpdateQuote={onUpdateQuote}  
        />  
      </div>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;
