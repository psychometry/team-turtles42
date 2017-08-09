// TODO: Add, Remove, Edit Quotes
import React from 'react';
import Quote from './Quote';
import './QuoteSettings.scss';

const Quotes = ({  quotes }) => {
  const quoteItems = quotes.map((quote, i) => {
    return (<Quote key={i} quote={quote} />);
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
