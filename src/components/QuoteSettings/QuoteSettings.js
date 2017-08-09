// TODO:
// QuoteSettings.defaultProps = {
//     tabs: [],
//   };
// TODO: Pass list name to addQuote()
import React, { Component } from 'react';
import SelectList from './SelectList';
import NewList from './NewList';
import Tabs from './Tabs';
import Quotes from './Quotes';
import defaultQuotes from '../../quotes.json';
import './QuoteSettings.scss';

class QuoteSettings extends Component {
  constructor() {
    super();
    this.state = {
      currentList: this.setCurrentList(),
      lists: this.loadQuoteLists()
    };
  }
  setCurrentList(name = '') {
    let currentList = JSON.parse(localStorage.getItem('currentList'));

    if (name) {
      currentList = JSON.parse(localStorage.getItem('lists'))
        .filter(list => {
          return list.name === name;
        });
    } else if (!currentList) {
      currentList = this.loadQuoteLists()[0];
    }
    
    localStorage.setItem('currentList', JSON.stringify(currentList));
    return currentList; 
  }
  loadQuoteLists() {
    const defaultQuoteLists = [
      {
        name: 'Default',
        quotes: defaultQuotes
      },
    ];
    
    let lists = JSON.parse(localStorage.getItem('lists'));

    if (!lists) {
      localStorage.setItem('lists', JSON.stringify(defaultQuoteLists));
      lists = JSON.parse(localStorage.getItem('lists'));
    }

    return lists;
  }
  
  addQuote = (list, text, source) => {
    
    // const 
  }
  addList = (name) => {
    let { lists } = this.state;

    lists.push({ name, quotes: [] });

    localStorage.setItem('lists', JSON.stringify(lists));
    this.setState({ lists });
  } 
  removeList = (event, i) => {
    let { lists } = this.state;

    lists.splice(i, 1);

    localStorage.setItem('lists', JSON.stringify(lists));
    this.setState({ lists });
  }

  render() {
    const { lists, currentList } = this.state;
    // const Pane = (props) => {
    //   console.log(props.children); // quotes array
      
    //   return (
    //     <div>
    //       <Quotes quotes={props.children}/>
    //     </div>
    //   );
    // };
    return (
      <div className="Quotes">
        <div className="list-settings">
          <SelectList 
            lists={lists}
            currentList={currentList}
            onSetCurrentList={this.setCurrentList}
          />
          <NewList onAddList={this.addList}></NewList>
        </div>
        <Tabs
          onAddQuote={this.addQuote}
          onRemoveList={this.removeList}
          onAddList={this.addList}
          selected={lists.firstSelect || 0}
          {...this.state}
        >
          {lists.map(tab =>
            <Quotes key={tab.name} label={tab.name} quotes={tab.quotes} />
          )} 
          {/* {lists.map(tab =>
            <Pane key={tab.name} label={tab.name}>{tab.quotes}</Pane>)
          } */}
        </Tabs>
      </div>
    );
  }

}

export default QuoteSettings;
