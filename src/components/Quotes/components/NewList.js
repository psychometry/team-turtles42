import React from 'react';
import PropTypes from 'prop-types';
import '../Quotes.scss';

const NewList = ({ onAddList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddList(listName.value);
    listName.value = '';
  }

  let listName;

  return (
    <form
      className="new-list" 
      onSubmit={(event) => handleSubmit(event)} 
    >
      <input
        ref={(input) => listName = input}
        type="text"
        placeholder="New list"
      />
    </form>
  );
};

NewList.propTypes = {
  onAddList: PropTypes.func.isRequired
};


export default NewList;


