import React from 'react';
import Quote from './Quote/Quote';
import './Footer.scss';

const Footer = ({ quote, onLikeQuote }) => {
  return (
    <div className="Footer">
      <div className="Settings">Settings</div>
      <Quote quote={quote} onLikeQuote={onLikeQuote} />
      <div className="Todo">Todo</div>
    </div>
  );
};

export default Footer;