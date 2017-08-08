// TODO:
// QuoteSettings.defaultProps = {
//     tabs: [],
//   };
// TODO: Pass list name to addQuote()
import React, { Component } from 'react';
import NewList from './NewList';
import QuoteLists from './QuoteLists';
import Quotes from './Quotes';
import defaultQuotes from '../../quotes.json';
import './QuoteSettings.scss';

class QuoteSettings extends Component {
  constructor() {
    super();
    this.state = {
      tabs: this.loadQuoteLists()
    };
  }
  // getQuoteList(name) {
  //   const quotes = JSON.parse(localStorage.getItem(name));
  //   if (quotes) {
  //     return quotes;
  //   } else {
  //     return defaultQuotes
  //   }
  // }
  loadQuoteLists() {
    const defaultQuoteLists = [
      {
        name: 'Default',
        quotes: defaultQuotes
      },
    ];
    
    let quoteLists = JSON.parse(localStorage.getItem('quoteLists'));

    if (!quoteLists) {
      console.log('set: ', quoteLists);
      localStorage.setItem('quoteLists', JSON.stringify(defaultQuoteLists));
      quoteLists = JSON.parse(localStorage.getItem('quoteLists'));
    }

    return quoteLists;
  }
  
  addQuote = (list, text, source) => {
    console.log(list, text, source);
    const { tabs: quoteLists } = this.state;
    // const 
  }
  addList = (name) => {
    let { tabs } = this.state;
    tabs.push({ name, quotes: [] });
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
      // console.log(props.children); // quotes array
      
      return (
        <div>
          <Quotes quotes={props.children}/>
        </div>
      );
    };
    return (
      <div className="Quotes">
        <div className="new-list" style={{ display: 'flex', alignItems: 'center' }}>
          <NewList onAddList={this.addList}></NewList>
        </div>
        <QuoteLists
          onAddQuote={this.addQuote}
          onRemoveList={this.removeList}
          onAddList={this.addList}
          selected={tabs.firstSelect || 0}
          {...this.state}
        >
          {tabs.map(tab =>
            <Pane key={tab.name} label={tab.name}>{tab.quotes}</Pane>)
          }
        </QuoteLists>
      </div>
    );
  }

}

export default QuoteSettings;
