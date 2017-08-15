import React from 'react';
import PropTypes from 'prop-types';
import '../Quotes.scss';

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

const SelectList = ({ lists, defaultList, onChangeList }) => {
  const options = lists.map(list => {
    return (<option key={list.name} value={list.name}>{list.name}</option>); 
  });

  const handleChange = (event) => {
    event.preventDefault();
    onChangeList(event.target.value);
  }
  return (
    <div className="select-list">
      <label>
        Show: 
        <select 
          value={defaultList.name}
          onChange={handleChange}
        >
          {options}
        </select>
      </label>
    </div>
  )
};

SelectList.propTypes = propTypes;

export default SelectList;
