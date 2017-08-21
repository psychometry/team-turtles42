import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

const propTypes = {
  listName: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .edit-quote {
    border-bottom: 1px solid silver;
    width: 100%;
    margin-right: 20px;
    padding: 20px 0;
    color: white;
    &:focus {
      border-bottom: 1px solid white;
      outline: none;
    }
  }
  i {
    visibility: hidden;
    cursor: pointer;
  }
  &:hover i {
    visibility: visible;
  }
`;

const Quote = ({ listName, quote, onRemoveQuote, onChange, onBlur }) => {
  const { id, text, source, /*liked*/ } = quote;

  return (
    <Li>
      <ContentEditable
        className="edit-quote"
        html={`${text} \u2014 ${source}`} 
        disabled={false} 
        onBlur={onBlur}
        onChange={(event) => onChange(event, listName, id)} 
      />
      {/* <i className="empty heart icon" onClick={} /> */}
      <i className="remove icon" onClick={() => onRemoveQuote(listName, id)} />
    </Li>
  );

};

Quote.propTypes = propTypes;

export default Quote;
