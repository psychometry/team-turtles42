import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  input {
    width: 200px;
    color: white;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
`;

const NewFeed = ({ onAddList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddList(listName.value);
    listName.value = '';
  }

  let listName;

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <input
        ref={(input) => listName = input}
        type="text"
        placeholder="New feed"
      />
    </Form>
  );
};

NewFeed.propTypes = {
  onAddList: PropTypes.func.isRequired
};

export default NewFeed;
