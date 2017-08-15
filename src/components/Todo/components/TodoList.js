import React from 'react';
import ListContext from './ListContext';
import AddForm from './AddForm';
import FilterTab from './FilterTab';
import './TodoList.scss';
const TodoList=({todo, viewFilter,show, addToDo, toggleList, setFilter,...rest})=>{
  let renderList=todo;
  if(viewFilter==='done'){
    renderList=todo.filter(item=>{return item.done});
  }else if(viewFilter==='not done'){
    renderList=todo.filter(item=>{return !item.done});
  }

  const display=show?(
    <div>
        <ListContext
          renderList={renderList}
          {...rest}
        />
        <AddForm submit={addToDo} placeholder='New Todo'/>
        <FilterTab viewFilter={viewFilter} setFilter={setFilter}/>
      </div>
  ):(
    <div>
    </div>
  );
  return(
    <div className='TodoList'>
      <h4 onClick={()=>{toggleList()}}>
        Todo:{todo.length}
      </h4>
      {display}
    </div>
  );
}
export default TodoList;
