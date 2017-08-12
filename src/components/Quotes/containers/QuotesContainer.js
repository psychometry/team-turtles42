import React, { Component } from 'react';
import v4 from 'node-uuid';
import SelectList from '../components/SelectList';
import Tabs from '../components/Tabs';
import Quotes from '../components/Quotes';
import { loadFromStorage, saveToStorage } from '../../../localStorage';
import defaultQuotes from '../../../quotes.json';
import '../Quotes.scss';

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
    const defaultList = loadFromStorage('lists').filter(list => list.name === name)[0];

    this.setState({ 
      defaultList: Object.assign({}, defaultList)
    });
  }
  
  // Lists
  addList = (name) => {
    const { lists } = this.state;

    this.setState({ 
      lists: [...lists, { name, quotes: [] }]
    });
  } 
  removeList = (event, i) => {
    const { lists } = this.state;
    
    this.setState({
      lists: [...lists.slice(0, i), ...lists.slice(i + 1)]
    });
  }
  // TODO: // updateList = (listName) => {}
  
  // Quotes
  addQuote = (listIndex, listName, text, source) => {
    const { lists } = this.state;
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
