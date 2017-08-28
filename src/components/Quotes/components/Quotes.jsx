import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quote from './Quote';

const Ul = styled.ul`
  margin: 0;
`;

const propTypes = {
  feed: PropTypes.object.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired
  // TODO: // onLikeQuote: PropTypes.func.isRequired 
}

const defaultProps = {
  feed: {},
  onRemoveQuote: () => {},
  onUpdateQuote: () => {}
};

const Quotes = ({ feed, onRemoveQuote, onUpdateQuote, onToggleLike }) => {
  const { feedName = '', quotes = [] } = feed;
  const quoteItems = quotes.map((quote) => {
    
    return (
      <Quote 
        key={quote.id} 
        quote={quote} 
        feedName={feedName}
        onRemoveQuote={onRemoveQuote}
        onUpdateQuote={onUpdateQuote}
        onToggleLike={onToggleLike}
      />
    );
  });

  return (<Ul>{quoteItems}</Ul>);
}

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
