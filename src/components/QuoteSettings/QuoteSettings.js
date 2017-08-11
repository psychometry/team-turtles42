import React, { Component } from 'react';
import v4 from 'node-uuid';
import SelectList from './SelectList';
import NewList from './NewList';
import Tabs from './Tabs';
import Quotes from './Quotes';
import { loadFromStorage, saveToStorage } from '../../localStorage';
import defaultQuotes from '../../quotes.json';
import './QuoteSettings.scss';

class QuoteSettings extends Component {
  constructor() {
    super();
    this.state = {
      defaultList: loadFromStorage('defaultList') 
        ? loadFromStorage('defaultList') 
        : this.loadDefaultList(), 

      lists: loadFromStorage('lists')
        ? loadFromStorage('lists')
        : this.loadDefaultLists()
    };
  }
  
  componentDidUpdate() {
    const { defaultList, lists } = this.state;
    saveToStorage('defaultList', defaultList);
    saveToStorage('lists', lists);
  }
  
  // Defaults
  loadDefaultList() {
    const defaultList = this.loadDefaultLists()[0];
    return defaultList;
  }
  loadDefaultLists() {
    defaultQuotes.forEach(quote => {
      quote.id = v4();
    });
    const defaultLists = [{ name: 'Default', quotes: defaultQuotes }];
    return defaultLists;
  }
  changeDefaultList = (name) => {
    let defaultList = loadFromStorage('lists')
      .filter(list => {
        return list.name === name;
      });

    this.setState({ defaultList });
  }

  // Lists
  addList = (name) => {
    let { lists } = this.state;

    lists = [
      ...lists, 
      { name, quotes: [] }
    ];
    
    this.setState({ lists });
  } 
  removeList = (event, i) => {
    let { lists } = this.state;

    lists.splice(i, 1);
    this.setState({ lists });
  }
  
  // Quotes
  addQuote = (listIndex, text, source) => {
    let { lists } = this.state;
    let currentList = lists.filter((list, i) => {
      return listIndex === i;
    })[0];

    currentList.quotes.unshift({ 
      id: v4(), 
      text, source, 
      isLiked: false
    });

    lists[listIndex] = currentList;
    this.setState({ lists });
  }
  removeQuote = (listName, id) => {
    let { lists } = this.state;
    let currentList = lists.filter((list) => list.name === listName)[0];

    let quotes = currentList.quotes.filter((quote) => quote.id !== id);
    currentList.quotes = quotes;
    lists[listName] = currentList;
    
    this.setState({ lists });
  }
  updateQuote = (listName, id, text, source) => {
    console.log(listName, id, text, source);
    
  }

  render() {
    const { lists, defaultList } = this.state;
    
    return (
      <div className="Quotes-Container">
        <SelectList 
          lists={lists}
          defaultList={defaultList}
          onChangeList={this.changeDefaultList}
        />
        <Tabs
          onAddQuote={this.addQuote}
          onRemoveList={this.removeList}
          onAddList={this.addList}
          selected={lists.firstSelect || 0}
          {...this.state}
        >
          {lists.map((list) =>
            <Quotes 
              key={list.name} 
              label={list.name} 
              quotes={list.quotes}
              onRemoveQuote={this.removeQuote}
              onUpdateQuote={this.updateQuote}
            />
          )} 
        </Tabs>
      </div>
    );
  }

}

export default QuoteSettings;
