import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quote from './Quote';

const QuoteList = styled.ul`
  margin: 0;
  padding: 0;
`;

const propTypes = {
  filteredQuotes: PropTypes.array.isRequired,
}


const Quotes = ({ 
  filteredQuotes, 
  activeTab,
  onRemoveQuote, 
  onUpdateQuote, 
  onToggleFavorite 
}) => {
  
  const quotes = filteredQuotes.map(quote => {
    return (
      <Quote 
        key={quote.quoteId}
        quote={quote}
        activeTab={activeTab}
        onRemoveQuote={onRemoveQuote}
        onUpdateQuote={onUpdateQuote}
        onToggleFavorite={onToggleFavorite}
      />
    );
  });

  return <QuoteList>{quotes}</QuoteList>;
};

Quotes.propTypes = propTypes;

export default Quotes;
