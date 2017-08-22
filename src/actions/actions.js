export const SHOW='SHOW',
  HIDE='HIDE',
  ADD_TODO='ADD_TODO',
  DELETE_TODO='DELETE_TODO',
  TOGGLE_TODO='TOGGLE_TODO',
  UPDATE_TODO='UPDATE_TODO',
  SET_FILTER='SET_FILTER',
  SET_FOCUS='SET_FOCUS',
  DELETE_FOCUS='DELETE_FOCUS',
  TOGGLE_FOCUS='TOGGLE_FOCUS';
export function show(app){
  return{type:SHOW, app};
}
export function hide(app){
  return{type:HIDE, app};
}
export function addTodo(text){
  return{type:ADD_TODO,text};
}
export function deleteTodo(id){
  return{type:DELETE_TODO,id};
}
export function toggleTodo(id){
  return{type:TOGGLE_TODO,id};
}
export function updateTodo(id,newId){
  return {type:UPDATE_TODO,id,newId};
}
export function setFilter(filter){
  return {type:SET_FILTER, filter};
}
export function setFocus(text){
  return{type:SET_FOCUS,text};
}
export function deleteFocus(id){
  return{type:DELETE_FOCUS,id};
}
export function toggleFocus(id){
  return{type:TOGGLE_FOCUS,id};
}
