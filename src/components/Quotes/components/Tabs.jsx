import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu';
import NewQuote from './NewQuote';
import Quotes from './Quotes';

const Container = styled.div`
  height: 30px;
  width: 100%;
`;

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
      activeTab: props.defaultList.name
    };
  }
  setList() {
    const list = this.props.lists.filter(list => {
      return list.name === this.state.activeTab;
    })[0];

    return list ? list : this.props.defaultList;
  }
  changeList = (listName) => {
    this.setState({ activeTab: listName });
  }
  render() {
    const { 
      lists, 
      onAddList,
      onRemoveList, 
      // onUpdateList, 
      showingNewQuote,
      onAddQuote,
      onRemoveQuote, 
      onUpdateQuote 
    } = this.props;

    const { activeTab } = this.state;
    
    return (
      <Container>
        <Menu
          activeTab={activeTab}
          onChangeList={this.changeList}
          lists={lists} 
          onAddList={onAddList}
          onRemoveList={onRemoveList}
        /> 
        {showingNewQuote && 
          <NewQuote listName={activeTab} onAddQuote={onAddQuote} />
        }
        <Quotes 
          list={this.setList()} 
          onRemoveQuote={onRemoveQuote}
          onUpdateQuote={onUpdateQuote}  
        />  
      </Container>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;
