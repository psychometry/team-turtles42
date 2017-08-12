import React from 'react';
import { Icon } from 'semantic-ui-react'
import './CurrentQuote.scss';

const CurrentQuote = ({ quote = [], onLikeQuote }) => {
  const { text, source, liked } = quote;
  let heartClassName = 'empty heart';
  
  if (liked) {
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
