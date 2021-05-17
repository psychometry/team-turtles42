import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_FILTER, TOGGLE_LIST} from '../actions/TodoActionCreators';
import {v4} from 'uuid';
import {combineReducers} from 'redux';
function todo(state=[],action){
  switch(action.type){
    case ADD_TODO:
      let item={text:action.text,done:false,id:v4()};
      return [...state,item];
    case DELETE_TODO:
      return state.filter(item=>item.id!==action.id);
    case TOGGLE_TODO:
      let i=state.findIndex(item=>{return item.id===action.id});
      return [...state.slice(0,i),{...state[i],done:!state[i].done},...state.slice(i+1)];
    case UPDATE_TODO:
      let todo=state.slice();
      let j=state.findIndex(item=>{return item.id===action.id});
      let k=state.findIndex(item=>{return item.id===action.newId});
      todo[k]=state[j];
      todo[j]=state[k];
      return todo;
    default:
      return state;
  }
}
function viewFilter(state='all',action){
  switch(action.type){
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
function showList(state=false,action){
  switch(action.type){
    case TOGGLE_LIST:
      return !state;
    default:
      return state;
  }
}
const todoReducer=combineReducers({todo,viewFilter,showList});
export default todoReducer;
