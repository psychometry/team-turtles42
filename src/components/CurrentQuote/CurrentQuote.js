import React from 'react';
import { Icon } from 'semantic-ui-react'
import './CurrentQuote.scss';

const CurrentQuote = ({ quote = [], onLikeQuote }) => {
  const [ text, source, isLiked ] = quote;
  let heartClassName = 'empty heart';

  if (isLiked) {
    heartClassName = 'heart';
  }
  
  return (
    <div className="CurrentQuote">
      <blockquote>
        <p>{text}</p>
        <div className="quote-source">
          {source} <Icon onClick={onLikeQuote} name={heartClassName} />
        </div>
      </blockquote> 
    </div>
  );
};

export default CurrentQuote;
