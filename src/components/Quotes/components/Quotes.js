import React from 'react';
import PropTypes from 'prop-types';
import QuoteContainer from '../containers/QuoteContainer';
import '../Quotes.scss';

const propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired, 
    source: PropTypes.string.isRequired, 
    liked: PropTypes.bool.isRequired
  }),
  label: PropTypes.string.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired
  // TODO: // onLikeQuote: PropTypes.func.isRequired 
}

const Quotes = ({ quotes, label: listName, onRemoveQuote, onUpdateQuote }) => {
  const quoteItems = quotes.map((quote) => {
    return (
      <QuoteContainer 
        key={quote.id} 
        quote={quote} 
        listName={listName}
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
