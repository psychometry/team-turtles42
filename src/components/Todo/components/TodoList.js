import React from 'react';
import ListContext from './ListContext';
import PropTypes from 'prop-types'
import AddForm from './AddForm';
import FilterTab from './FilterTab';
import './TodoList.scss';
import '../containers/ListContainer.scss';
import './AddForm.scss'

const TodoList=({todo, addTodo, setFilter, toggleList,...rest})=>{
  let renderList=todo.todo;
  if(todo.viewFilter==='done'){
    renderList=todo.todo.filter(item=>{return item.done});
  }else if(todo.viewFilter==='not done'){
    renderList=todo.todo.filter(item=>{return !item.done});
  }
  return(
    <div className='ListContainer'>
      {todo.showList &&
        <div className="TodoList">
          <div className="inbox">
            Inbox
            <span className="todo-count">{todo.todo.length}</span>
          </div>
          <ListContext
            renderList={renderList}
            {...rest}
          />
          <div className="list-footer">
            <AddForm className='AddForm' focus={true} submit={addTodo} placeholder='New Todo'/>
            <FilterTab viewFilter={todo.viewFilter} setFilter={setFilter}/>
          </div>
          <i className="pointer" />
        </div>

      }
      <div className="todo-toggle" onClick={()=>{toggleList("todo")}}>
        Todo
        {todo.todo.length > 0 &&
          <span className="todo-count floating">{todo.todo.length}</span>
        }
      </div>
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
