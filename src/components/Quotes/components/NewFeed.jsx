import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  input {
    width: 200px;
    color: ${({ theme }) => theme.white};
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
`;

const NewFeed = ({ onAddFeed }) => {
  let listName;
  
  return (
    <Form onSubmit={(event) => {
      event.preventDefault();
      onAddFeed(listName.value);
      listName.value = '';
    }}>
      <input
        ref={(input) => listName = input}
        type="text"
        placeholder="New feed"
      />
    </Form>
  );
};

export default NewFeed;
