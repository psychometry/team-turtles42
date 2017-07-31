import React from 'react';
import { Icon } from 'semantic-ui-react'
import './Quote.scss';

const Quote = ({ quote = [], onLikeQuote }) => {
  const [ text, source, isLiked ] = quote;
  let heartClassName = 'empty heart';

  if (isLiked) {
    heartClassName = 'heart';
  }
  const handleLikeQuote = () => {
    onLikeQuote();
  };
  return (
    <div className="Quote">
      <blockquote>
        <p>{text}</p>
        <div className="quote-source">
          {source} <Icon onClick={handleLikeQuote} name={heartClassName} />
        </div>
      </blockquote> 
    </div>
  );
};

export default Quote;