// TODO: save quote to localStorage
import React, { Component } from 'react';
import { loadFromStorage, saveToStorage } from '../../localStorage';
import CurrentQuote from './CurrentQuote';

class CurrentQuoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      quote: ''
    };
  }
  componentDidMount() {
    this.setCurrentQuote();
  }
  
  setCurrentQuote() {
    const defaultList = loadFromStorage('defaultList');
    if (defaultList) { // FIXME: deal with no defaultList
      const { quotes }  = defaultList;
      this.setState({
        quote: quotes[Math.floor(Math.random() * quotes.length)]
      });
    }
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
    const { quote } = this.state;
    return (
      <CurrentQuote quote={quote} onLikeQuote={this.likeQuote} />
    );
  }
}

export default CurrentQuoteContainer; 
