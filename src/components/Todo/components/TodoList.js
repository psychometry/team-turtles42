import React from 'react';
import ListContext from './ListContext';
import AddForm from './AddForm';
import FilterTab from './FilterTab';
import './TodoList.scss';
import '../containers/ListContainer.scss';
import './AddForm.scss'
const TodoList=({todo, viewFilter,show, addTodo, toggle, setFilter,...rest})=>{
  let renderList=todo.todo;
  if(todo.viewFilter==='done'){
    renderList=todo.todo.filter(item=>{return item.done});
  }else if(todo.viewFilter==='not done'){
    renderList=todo.todo.filter(item=>{return !item.done});
  }
  const display=show?(
    <div>
        <ListContext
          renderList={renderList}
          {...rest}
        />
        <AddForm className='AddForm' submit={addTodo} placeholder='New Todo'/>
        <FilterTab viewFilter={todo.viewFilter} setFilter={setFilter}/>
      </div>
  ):(
    <div>
    </div>
  );
  return(
    <div className='TodoList ListContainer'>
      <h4 onClick={()=>{toggle("todo")}}>
        Todo:{todo.todo.length}
      </h4>
      {display}
    </div>
  );
}
export default TodoList;
