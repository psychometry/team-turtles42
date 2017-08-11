import React, { Component } from 'react';
import v4 from 'node-uuid';
import { parseQuote } from '../../utilities';
import './QuoteSettings.scss';

class NewQuote extends Component {
  handleSubmit = (event, listIndex) => {
    event.preventDefault();
    let { value: quote } = this.quote;
    const [text, source] = parseQuote(quote);
    
    if (text && source) {
      this.props.onAddQuote(listIndex, text, source);
      this.quote.value = '';
    } else {
      console.log("Invalid quote");
    }
  }
  render() {
    const { listIndex } = this.props;

    return (
      <form className="new-quote-form"
        onSubmit={(event) => this.handleSubmit(event, listIndex)} 
      >
        <input
          ref={(input) => this.quote = input}
          type="text"
          placeholder="New quote"
        />
      </form>
    );
  }
};

export default NewQuote;
