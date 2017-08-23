import React, { Component } from 'react';
import { loadFromStorage } from '../../localStorage';
import { loadDefaultList } from '../../quotesHelpers';
import CurrentQuote from './CurrentQuote';

class CurrentQuoteContainer extends Component {
  constructor(props) {
    super(props);
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

    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
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
