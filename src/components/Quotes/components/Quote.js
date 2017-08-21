import React from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { Icon } from 'semantic-ui-react';

const propTypes = {
  listName: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

const Quote = ({ listName, quote, onRemoveQuote, onChange, onBlur }) => {
  const { id, text, source, liked } = quote;

  return (
    <li className="Quote">
      <ContentEditable
        className="edit-quote"
        html={`${text} \u2014 ${source}`} 
        disabled={false} 
        onBlur={onBlur}
        onChange={(event) => onChange(event, listName, id)} 
      />
      <Icon
        className="remove-quote"
        name="remove" 
        onClick={() => onRemoveQuote(listName, id)} 
      />
    </li>
  );

};

Quote.propTypes = propTypes;

export default Quote;
