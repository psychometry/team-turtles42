import React, { Component } from 'react';
import v4 from 'uuid/v4';
import styled from 'styled-components';
import SelectFeed from '../components/SelectFeed';
import NewFeed from '../components/NewFeed';
import Tabs from '../components/Tabs';
import { loadFromStorage, saveToStorage } from '../../../localStorage';
import { loadDefaultLists, loadDefaultList } from '../../../quotesHelpers';

const Container = styled.div`
  width: 510px;
`;

const Settings = styled.div`
  width: 460px;
  display: flex;
  justify-content: space-between;
  .feeds {
    display: flex;
    justify-content: space-between;
  }
`;

const AddQuote = styled.a`
  height: 30px;
  border: none;
  color: ${({showingNewQuote}) => showingNewQuote ? 'white' : 'rgba(255,255,255,.5)'};
  background: transparent;
  .plus.icon {
    font-size: .9em;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: loadFromStorage('defaultList') 
        ? loadFromStorage('defaultList') 
        : loadDefaultList(), 
      lists: loadFromStorage('lists')
        ? loadFromStorage('lists')
        : loadDefaultLists(),
      showingNewQuote: false
    };
  }
  
  componentDidUpdate() {
    const { defaultList, lists } = this.state;
    saveToStorage('defaultList', defaultList);
    saveToStorage('lists', lists);
  }
  
  // Lists
  changeDefaultList = (name) => {
    const defaultList = loadFromStorage('lists').filter(list => list.name === name)[0];
    if (defaultList.quotes.length) {
      this.setState({ 
        defaultList: Object.assign({}, defaultList)
      });
    } else {
      throw new Error('Can\'t set default list without quotes.');    }
  }
  addList = (name) => {
    const { lists } = this.state;

    this.setState({ 
      lists: [...lists, { name, quotes: [] }]
    });
  } 
  removeList = (listName) => {
    const { lists } = this.state;
    const listIndex = lists.findIndex(list => list.name === listName);
    
    if (lists.length > 1) {
      this.setState({
        lists: [...lists.slice(0, listIndex), ...lists.slice(listIndex + 1)]
      });
    } else {
      // TODO: Add user notification
      throw new Error('Can\'t have no lists.');
    }
  }
  // TODO: updateList = (listName) => {}
  
  // Quotes
  toggleNewQuote = () => {
    const { showingNewQuote } = this.state;
    this.setState({ showingNewQuote: showingNewQuote ? false : true });
  }

  addQuote = (listName, text, source) => {
    const { lists } = this.state;
    const listIndex = lists.findIndex(list => list.name === listName);
    const { quotes } = lists[listIndex];

    this.setState({
      lists: [
        ...lists.slice(0, listIndex), 
        ...lists.slice(listIndex + 1),
        Object.assign({}, lists[listIndex], {
          name: listName,
          quotes: [
            { id: v4(), text, source, liked: false }, // new quote
            ...quotes,
          ] 
        })
      ]
    });
  }

  removeQuote = (listName, id) => {
    const { lists } = this.state;
    const listIndex = lists.findIndex(list => list.name === listName);
    const { quotes } = lists[listIndex];
    const quoteIndex = quotes.findIndex(quote => quote.id === id);
    
    this.setState({ 
      lists: [
        ...lists.slice(0, listIndex),
        Object.assign({}, lists[listIndex], {
          name: listName,
          quotes: [
            ...quotes.slice(0, quoteIndex),
            // removed quote
            ...quotes.slice(quoteIndex + 1)
          ]
        }),
        ...lists.slice(listIndex + 1)
      ]
    });
  }
  
  updateQuote = (listName, updatedQuote) => {
    const { lists } = this.state;
    const listIndex = lists.findIndex(list => list.name === listName);
    const { quotes } = lists[listIndex];
    const quoteIndex = quotes.findIndex(quote => quote.id === updatedQuote.id);

    this.setState({ 
      lists: [
        ...lists.slice(0, listIndex), 
        {
          name: listName,
          quotes: [
            ...quotes.slice(0, quoteIndex), 
            updatedQuote, 
            ...quotes.slice(quoteIndex + 1)
          ]
        },
        ...lists.slice(listIndex + 1)
      ] 
    });
  }

  render() {
    const { lists, defaultList, showingNewQuote } = this.state;
    
    return (
      <Container>
        <Settings> 
          <div className="feeds">
            <SelectFeed 
              lists={lists}
              defaultList={defaultList}
              onChangeList={this.changeDefaultList}
            />
            <NewFeed onAddList={this.addList} />  
          </div>
          <AddQuote showingNewQuote={showingNewQuote} onClick={this.toggleNewQuote}>
            <i className="plus icon" />
            Add Quote
          </AddQuote>
        </Settings>
        <Tabs 
          lists={lists} 
          defaultList={defaultList} 
          onAddList={this.addList}
          onRemoveList={this.removeList}
          showingNewQuote={showingNewQuote}
          onAddQuote={this.addQuote}
          onRemoveQuote={this.removeQuote}
          onUpdateQuote={this.updateQuote}
        />
      </Container>
    );
  }

}

export default QuotesContainer;
