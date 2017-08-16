import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './CurrentQuote.scss';

const propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string, 
    source: PropTypes.string, 
    liked: PropTypes.bool
  }),
  onLikeQuote: PropTypes.func.isRequired 
};

const CurrentQuote = ({ quote, onLikeQuote }) => {
  const { text, source, liked } = quote;
  let heartClassName = 'empty heart';
  
  if (liked) {
    heartClassName = 'heart';
  }
  
  return (
    <div className="Current-Quote">
      <blockquote>
        <p>{text}</p>
        <div className="quote-source">
          {source} <Icon onClick={onLikeQuote} name={heartClassName} />
        </div>
      </blockquote> 
    </div>
  );
};

CurrentQuote.propTypes = propTypes;

export default CurrentQuote;

  

