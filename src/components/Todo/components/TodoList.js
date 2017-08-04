import React from 'react';
import {List, Header, Segment, Divider} from 'semantic-ui-react';
import TodoItem from './Item';
import AddForm from './AddForm';
import FilterTab from './FilterTab';
const TodoList=({todo, viewFilter,show, addToDo, toggleItem, deleteItem, toggleList, setFilter})=>{
  let renderList=todo;
  if(viewFilter==='done'){
    renderList=todo.filter(item=>{return item.done});
  }else if(viewFilter==='not done'){
    renderList=todo.filter(item=>{return !item.done});
  }

  const display=show?(
    <Segment attached>
        <List as='ul' divided className='restricted-height'>
          {
            renderList.map((item, i)=>{
              return (
                <List.Item as='li' key={i}>
                  <TodoItem item={item} toggleItem={toggleItem} deleteItem={deleteItem}/>
                </List.Item>
              );
            })
          }
        </List>
        <Divider horizontal/>
        <AddForm add={addToDo}/>
        <Divider horizontal/>
        <FilterTab viewFilter={viewFilter} setFilter={setFilter}/>
      </Segment>
  ):(
    <div>
    </div>
  );
  return(
    <Segment.Group>
      <Header as='h4' attached='top' onClick={()=>{toggleList()}}>
        Todo:{todo.length}
      </Header>
      {display}
    </Segment.Group>
  );
}
export default TodoList;

