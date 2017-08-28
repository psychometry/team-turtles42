import React from 'react';

const Slider=({id, toggle, checked})=>{
  const handleChange=(e)=>{
    e.preventDefault();
    toggle(id);
  }
  return(
    <div>
      <input type='checkbox' checked={checked} onChange={handleChange()}/>
      <span></span>
    </div>
  )
}
export default Slider;
