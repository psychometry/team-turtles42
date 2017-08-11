import React from 'react';
import { Icon } from 'semantic-ui-react';
import { parseQuote } from '../../utilities';
import ContentEditable from 'react-contenteditable';

const Quote = ({ quote, listName, onRemoveQuote, onUpdateQuote }) => {
  const { id, text, source, isLiked } = quote;
  const handleChange = (event, listName) => {
    const [ text, source ] = parseQuote(event.target.value);
    onUpdateQuote(listName, id, text, source);
  };
  return (
    <li className="Quote">
      <ContentEditable
        className="edit-quote"
        ref={(input) => this.listName = input}
        html={`"${text}" \u2014 ${source}`}  // innerHTML of the editable div
        disabled={false}       // use true to disable edition
        onChange={(event) => handleChange(event, listName)} // handle innerHTML change
      />
      <Icon
        name="remove" 
        onClick={() => onRemoveQuote(listName, id)} 
      />
    </li>
  );
};

export default Quote;
