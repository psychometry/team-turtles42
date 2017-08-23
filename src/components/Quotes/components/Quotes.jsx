import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuoteContainer from '../containers/QuoteContainer';

const Ul = styled.ul`
  margin: 0;
`;

const propTypes = {
  list: PropTypes.object.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired
  // TODO: // onLikeQuote: PropTypes.func.isRequired 
}

const defaultProps = {
  list: {},
  onRemoveQuote: () => {},
  onUpdateQuote: () => {}
};

const Quotes = ({ list, onRemoveQuote, onUpdateQuote }) => {
  const { name = '', quotes = [] } = list;
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

  return (<Ul>{quoteItems}</Ul>);
}

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
