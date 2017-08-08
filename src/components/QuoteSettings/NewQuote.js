import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './QuoteSettings.scss';

class NewQuote extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let { value: quote } = this.quote;
    quote = quote.split('-');
    const [ text, source ] = quote;
    // console.log(text, source);
    this.props.onAddQuote(text, source);
    this.quote.value = '';
  }
  render() {
    return (
      <Form className="new-quote-form"
        onSubmit={(event) => this.handleSubmit(event)} 
        style={{ width: "100px" }} inverted size="small"
      >
        <input
          ref={(input) => this.quote = input}
          type="text"
          placeholder="New quote"
        />
        {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
      </Form>
    );
  }
};

export default NewQuote;
