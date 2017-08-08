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
      tabs: [
        {
         name: 'Default',
         quotes: defaultQuotes
        },
      ]
    };
  }
  getQuoteList(name) {
    const quotes = JSON.parse(localStorage.getItem(name));
    console.log(quotes);
  }
  addQuote(text, source) {

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
          onRemoveList={this.removeList}
          onAddList={this.addList}
          selected={tabs.firstSelect || 0}
          {...this.state}
        >
          {tabs.map(tab =>
            <Pane label={tab.name}>{tab.quotes}</Pane>)
          }
        </QuoteLists>
      </div>
    );
  }
}

export default QuoteSettings;
