import React from 'react';
import PropTypes from 'prop-types';
import QuoteContainer from '../containers/QuoteContainer';
import '../Quotes.scss';

const propTypes = {
  list: PropTypes.object.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired
  // TODO: // onLikeQuote: PropTypes.func.isRequired 
}

const Quotes = ({ list, onRemoveQuote, onUpdateQuote }) => {
  const { name, quotes } = list;
  const quoteItems = quotes.map((quote) => {
    return (
      <QuoteContainer 
        key={quote.id} 
        quote={quote} 
        listName={name}
        onRemoveQuote={onRemoveQuote}
        onUpdateQuote={onUpdateQuote}
      />
    );
  });

  return (
    <div className="Quotes">
      <ul>
        {quoteItems}
      </ul>
    </div>
  );
}

Quotes.propTypes = propTypes;

export default Quotes;
