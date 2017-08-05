import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import './ListContainer.scss';

class ListContainer extends Component{
  constructor(){
    super();
    this.state={
      todo:[],
      viewFilter:null,
      show:false,
    }
  }
  addToDo=(name)=>{
    let item={name:name,done:false,id:this.state.todo.length+1}
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
  toggleList=()=>{
    this.setState({show:!this.state.show});
  }
  setFilter=(view)=>{
    this.setState({viewFilter:view});
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
          setFilter={this.setFilter}/>
      </div>
    );
  }
}

export default ListContainer;

