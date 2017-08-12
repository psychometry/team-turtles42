import React from 'react';
import PropTypes from 'prop-types';
import { parseQuote } from '../../../utilities';
import '../Quotes.scss';

const propTypes = {
  listName: PropTypes.string,
  onAddQuote: PropTypes.func.isRequired
}
const NewQuote = ({ listName, onAddQuote }) => {
  const handleSubmit = (event, listName) => {
    event.preventDefault();
    const [text, source] = parseQuote(inputRef.value);
    
    if (text && source) {
      onAddQuote(listName, text, source);
      inputRef.value = '';
    } else {
      // TODO: Add user notification
      throw new Error('Invalid quote. Format should be "text - source"');
    }
  }

  let inputRef;

  return (
    <form className="new-quote-form"
      onSubmit={(event) => handleSubmit(event, listName)} 
    >
      <input
        ref={(input) => inputRef = input}
        type="text"
        placeholder="New quote - source"
      />
    </form>
  );
}

NewQuote.propTypes = propTypes;

export default NewQuote;
