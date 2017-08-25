import React from 'react';
import ListContext from './ListContext';
import PropTypes from 'prop-types'
import AddForm from './AddForm';
import FilterTab from './FilterTab';
import './TodoList.scss';
import '../containers/ListContainer.scss';
import './AddForm.scss'
const TodoList=({todo,show, addTodo, toggle, setFilter,...rest})=>{
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
TodoList.PropTypes={
  todo:PropTypes.shape({
    todo:PropTypes.array.isRequired,
    viewFilter:PropTypes.string.isRequired
  }),
  show:PropTypes.bool.isRequired,
  toggle:PropTypes.func.isRequired,
  addTodo:PropTypes.func.isRequired,
  setFilter:PropTypes.func.isRequired,
}
export default TodoList;
