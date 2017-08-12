import React, { Component } from 'react';
import { parseQuote } from '../../../utilities';
import '../Quotes.scss';

class NewQuote extends Component {
  handleSubmit = (event, listIndex, listName) => {
    event.preventDefault();
    let { value: quote } = this.quote;
    const [text, source] = parseQuote(quote);
    
    if (text && source) {
      this.props.onAddQuote(listIndex, listName, text, source);
      this.quote.value = '';
    } else {
      console.log("Invalid quote");
    }
  }
  render() {
    const { listIndex, listName } = this.props;

    return (
      <form className="new-quote-form"
        onSubmit={(event) => this.handleSubmit(event, listIndex, listName)} 
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
