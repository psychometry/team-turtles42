import React from 'react';
import '../Quotes.scss';

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

export default SelectList;
