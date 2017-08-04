import React from 'react';
import {Menu} from 'semantic-ui-react';

const FilterTab=({viewFilter,setFilter})=>{
  return(
    <Menu attached='bottom' tabular>
      <Menu.Item name='done' onClick={()=>{setFilter("done")}}
        active={viewFilter==='done'}>
        Done
      </Menu.Item>
      <Menu.Item name='not done' onClick={()=>{setFilter("not done")}}
        active={viewFilter==='not done'}>
        Not Done
      </Menu.Item>
      <Menu.Item name='all' onClick={()=>{setFilter("all")}}
        active={viewFilter==='all'||viewFilter===null}>
        All
      </Menu.Item>
    </Menu>
  )
}
export default FilterTab;
