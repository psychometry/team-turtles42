import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_FILTER} from '../actions/actions';
import v4 from 'node-uuid';
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
      return state.slice().splice(i,1,{...state[i],done:!state[i].done});
    case UPDATE_TODO:
      let todo=state.splice();
      let j=state.findIndex(item=>{return item.id===action.id});
      let k=state.findIndex(item=>{return item.id===action.newId});
      let removed=todo.splice(j,1);
      return todo.splice(k,0,removed[0]);
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
const todoReducer=combineReducers({todo,viewFilter});
export default todoReducer;
