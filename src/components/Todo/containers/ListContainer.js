import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import {loadFromStorage,saveToStorage} from '../localStorage';
import v4 from 'node-uuid';
import './ListContainer.scss';
class ListContainer extends Component{
  constructor(){
    super();
    this.state={
      todo:(loadFromStorage('todo'))?loadFromStorage('todo'):[],
      viewFilter:null,
      show:true,
    }
  }
  addToDo=(name)=>{
    let item={name:name,done:false,id:v4()}
    this.setState({todo:[...this.state.todo,item]})
  }
  toggleItem=(id)=>{
    let todo=this.state.todo;
    let i=todo.findIndex(item=>{return item.id===id});
    this.setState({todo:[...todo.slice(0,i),{...todo[i],done:!todo[i].done},...todo.slice(i+1)]});
  }
  deleteItem=(id)=>{
    let todo=this.state.todo;
    this.setState({todo:todo.filter(item=>item.id!==id)});
  }
  updateTodo=(id,newId)=>{
    let todo=this.state.todo.slice();
    let i=todo.findIndex(item=>{return item.id===id});
    let newI=todo.findIndex(item=>{return item.id===newId});
    let removed=todo.splice(i,1);
    todo.splice(newI,0,removed[0]);
    this.setState({todo:todo});
  }
  toggleList=()=>{
    this.setState({show:!this.state.show});
  }
  setFilter=(view)=>{
    this.setState({viewFilter:view});
  }
  componentDidUpdate(){
    saveToStorage('todo',this.state.todo);
  }
  render(){
    return(
      <div className='ListContainer'>
        <TodoList todo={this.state.todo}
          show={this.state.show}
          viewFilter={this.state.viewFilter}
          toggleList={this.toggleList}
          addToDo={this.addToDo}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
          updateTodo={this.updateTodo}
          setFilter={this.setFilter}
        />
      </div>
    );
  }
}

export default ListContainer;
