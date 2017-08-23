export const DISPLAY='DISPLAY',
  HIDE='HIDE',
  TOGGLE='TOGGLE';
export function display(app){
  return{type:DISPLAY, app};
}
export function hide(app){
  return{type:HIDE, app};
}
export function toggle(app){
  return{type:TOGGLE, app};
}
