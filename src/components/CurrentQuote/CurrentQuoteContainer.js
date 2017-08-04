import React, { Component } from 'react';
import CurrentQuote from './CurrentQuote';
import quotes from './quotes.json';

class CurrentQuoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      quote: []
    };
  }
  componentDidMount() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }
  likeQuote = () => {
    const { quote } = this.state;
    quote[2] ? quote[2] = false : quote[2] = true;

    this.setState({
      quote: quote
    });
  }
  render() {
    return (
      <CurrentQuote quote={this.state.quote} onLikeQuote={this.likeQuote} />
    );
  }
}

export default CurrentQuoteContainer;
