export const ADD_TODO='ADD_TODO', DELETE_TODO='DELETE_TODO', TOGGLE_TODO='TOGGLE_TODO';

export function addTodo(text){
  return {type:ADD_TODO, text};
}
export function deleteTodo(id){
  return {type:DELETE_TODO, id};
}
export function toggleTodo(id){
  return {type:TOGGLE_TODO, id};
}
