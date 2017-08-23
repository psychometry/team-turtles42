import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseQuote } from '../../../quotesHelpers';
import Quote from '../components/Quote';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: '',
      quote: {}
    }
  }
  handleChange = (event, listName, id) => {
    const [ text, source ] = parseQuote(event.target.value);
    this.setState({ listName, quote: { id, text, source } });
  };
  handleBlur = () => {
    if (this.state.listName) {
      const { listName, quote } = this.state;
      this.props.onUpdateQuote(listName, quote);
    }
  }
  
  render() {
    const { quote, listName, onRemoveQuote } = this.props;
    return (
      <Quote
        listName={listName}
        onRemoveQuote={onRemoveQuote}
        quote={quote}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

QuoteContainer.propTypes = {
  quote: PropTypes.object.isRequired,
  listName: PropTypes.string.isRequired,
  onRemoveQuote: PropTypes.func.isRequired
}

export default QuoteContainer;
