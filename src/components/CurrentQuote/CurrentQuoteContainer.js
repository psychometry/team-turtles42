// TODO: save quote to localStorage
import React, { Component } from 'react';
import { loadFromStorage, saveToStorage } from '../../localStorage';
import { loadDefaultList } from '../../utilities';
import CurrentQuote from './CurrentQuote';

class CurrentQuoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      quote: {} 
    };
  }

  componentDidMount() {
    this.setCurrentQuote();
  }
  
  setCurrentQuote() {
    const defaultList = loadFromStorage('defaultList') 
      ? loadFromStorage('defaultList')
      : loadDefaultList();

    const { quotes } = defaultList;
    const defaultQuote = { text: "One love", source: "Bob Marley", liked: false };

    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)] || defaultQuote
    });
  }
  
  likeQuote = () => {
    const { quote } = this.state;
    
    this.setState({
      quote: Object.assign({}, quote, {
        liked: quote.liked ? false : true
      })
    });
    
  }
  render() {
    return (
      <CurrentQuote quote={this.state.quote} onLikeQuote={this.likeQuote} />
    );
  }
}

export default CurrentQuoteContainer; 
