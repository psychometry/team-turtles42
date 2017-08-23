import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 1em;
  color: silver; 
  label select {
    margin-left: 10px;
    max-width: 100px;
    color: white;
    padding: 0;
    background: transparent;
    outline: none;
    border: none;
  }
`;

const propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quotes: PropTypes.array.isRequired
  })),
  defaultList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quotes: PropTypes.array.isRequired
  }),
  onChangeList: PropTypes.func.isRequired
};

const SelectFeed = ({ lists, defaultList, onChangeList }) => {
  const options = lists.map(list => {
    return (<option key={list.name} value={list.name}>{list.name}</option>); 
  });

  const handleChange = (event) => {
    event.preventDefault();
    onChangeList(event.target.value);
  }
  return (
    <Div>
      <label>
        Feed: 
        <select 
          value={defaultList.name}
          onChange={handleChange}
        >
          {options}
        </select>
      </label>
    </Div>
  )
};

SelectFeed.propTypes = propTypes;

export default SelectFeed;
