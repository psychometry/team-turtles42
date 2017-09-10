import React from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import PropTypes from 'prop-types';
import { parseQuote } from '../../../utilities';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .edit-quote {
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    width: 100%;
    margin-right: 20px;
    padding: 20px 0;
    color: ${({theme}) => theme.white};
    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.white};
      outline: none;
    }
  }
  i {
    visibility: hidden;
    opacity: .75;
    cursor: pointer;
  }
  .remove {
    margin-left: 5px;
  }
  &:hover i {
    visibility: visible;
  }
`;

const propTypes = {
  quote: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired
};

const Quote = ({
  quote,
  activeTab,
  onEditQuote,
  onUpdateQuote,
  onRemoveQuote,
  onToggleFavorite
}) => {
  const handleUpdateQuote = (event, feedId, quoteId) => {
    // Use innerText if more than one event handler because of contentEditable.
    const [ text, source ] = parseQuote(event.target.innerText); 
    if (quoteId && feedId && text && source) {
      onUpdateQuote(quoteId, { feedId, quoteId, text, source});
    }
  };

  const { quoteId, text, source, liked } = quote;

  let heart = 'empty heart icon';
  if (liked) heart = 'heart icon';

  return (
    <ListItem>
      <ContentEditable
        className="edit-quote"
        html={`${text} \u2014 ${source}`} 
        disabled={false} 
        onBlur={event => handleUpdateQuote(event, activeTab, quoteId)}
      />
      <i className={heart} onClick={() => onToggleFavorite(activeTab, quoteId)} />
      <i 
        className="remove icon" 
        onClick={event => onRemoveQuote(activeTab, quoteId)}
      />
    </ListItem>
  );
}

Quote.propTypes = propTypes;

export default Quote;
