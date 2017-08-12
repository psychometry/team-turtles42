import React, { Component } from 'react';
import v4 from 'node-uuid';
import SelectList from '../components/SelectList';
import Tabs from '../components/Tabs';
import Quotes from '../components/Quotes';
import { loadFromStorage, saveToStorage } from '../../../localStorage';
import { loadDefaultLists, loadDefaultList } from '../../../utilities';
import '../Quotes.scss';

class QuoteSettings extends Component {
  constructor() {
    super();
    this.state = {
      defaultList: loadFromStorage('defaultList') 
        ? loadFromStorage('defaultList') 
        : loadDefaultList(), 
      lists: loadFromStorage('lists')
        ? loadFromStorage('lists')
        : loadDefaultLists()
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

    this.setState({ 
      defaultList: Object.assign({}, defaultList)
    });
  }
  addList = (name) => {
    const { lists } = this.state;

    this.setState({ 
      lists: [...lists, { name, quotes: [] }]
    });
  } 
  removeList = (listIndex) => {
    const { lists } = this.state;
    
    if (lists.length > 1) {
      this.setState({
        lists: [...lists.slice(0, listIndex), ...lists.slice(listIndex + 1)]
      });
    } else {
      // TODO: Add user notification
      throw new Error('Can\'t have no lists');
    }
  }
  // TODO: updateList = (listName) => {}
  
  // Quotes
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
