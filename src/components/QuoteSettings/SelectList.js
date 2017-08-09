import React from 'react';
import './QuoteSettings.scss';

const SelectList = ({ lists, currentList, onSetCurrentList }) => {
  const options = lists.map(list => {
    return (<option key={list.name} value={list.name}>{list.name}</option>); 
  });

  const handleChange = (event) => {
    event.preventDefault();
    onSetCurrentList(event.target.value);
  }
  console.log(currentList);
  return (
    <div className="select-list">
      <label>
        Current list: 
        <select 
          value={currentList.name}
          onChange={handleChange}
        >
          {options}
        </select>
      </label>
    </div>
  )
};

export default SelectList;
