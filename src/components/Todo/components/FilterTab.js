import React from 'react';
import './FilterTab.scss'
const FilterTab=({viewFilter,setFilter})=>{
  return(
    <div className='FilterTab'>
      <a id='done' onClick={()=>{setFilter("done")}}
        className={(viewFilter==='done')?'active':null}>
        Done
      </a>
      <a id='not done' onClick={()=>{setFilter("not done")}}
        className={(viewFilter==='not done')?'active':null}>
        Not Done
      </a>
      <a onClick={()=>{setFilter("all")}}
        className={(viewFilter==='all'||viewFilter===null)?'active':null}>
        All
      </a>
    </div>
  )
}
export default FilterTab;
