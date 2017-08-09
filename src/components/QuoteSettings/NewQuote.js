import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './QuoteSettings.scss';

class NewQuote extends Component {
  handleSubmit = (listIndex) => {
    console.log(arguments);
    console.log(listIndex);
    // event.preventDefault();
    // console.log(event);
    // console.log(listIndex);
    // let { value: quote } = this.quote;
    // quote = quote.split('-');
    // const [ text, source ] = quote;

    // this.props.onAddQuote(text, source);
    // this.quote.value = '';
  }
  render() {
    const { listIndex } = this.props;
    return (
      <form className="new-quote-form"
        onSubmit={(event, listIndex) => this.handleSubmit(event, listIndex)} 
      >
        <input
          ref={(input) => this.quote = input}
          type="text"
          placeholder="New quote"
        />
        {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
      </form>
    );
  }
};

export default NewQuote;
