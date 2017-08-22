
export const SET_FOCUS='SET_FOCUS',
DELETE_FOCUS='DELETE_FOCUS',
TOGGLE_FOCUS='TOGGLE_FOCUS';
export function setFocus(text){
  return{type:SET_FOCUS,text};
}
export function deleteFocus(id){
  return{type:DELETE_FOCUS,id};
}
export function toggleFocus(id){
  return{type:TOGGLE_FOCUS,id};
}
