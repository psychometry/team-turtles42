import React from 'react';
import { Icon } from 'semantic-ui-react'
import './Quote.scss';

const Quote = ({ quote = [], onLikeQuote }) => {
  let heartClassName = 'empty heart';

  if (quote[2]) {
    heartClassName = 'heart';
  }
  const handleLikeQuote = () => {
    onLikeQuote();
  };
  return (
    <div className="Quote">
      <blockquote>
        <p>{quote[0]}</p>
        <div className="quote-source">
          {quote[1]} <Icon onClick={handleLikeQuote} name={heartClassName} />
        </div>
      </blockquote> 
    </div>
  );
};

export default Quote;