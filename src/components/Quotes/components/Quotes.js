import React from 'react';
import Quote from './Quote';
import '../Quotes.scss';

const Quotes = ({ quotes, label: listName, onRemoveQuote, onUpdateQuote }) => {
  const quoteItems = quotes.map((quote) => {
    return (
      <Quote 
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

export default Quotes;
