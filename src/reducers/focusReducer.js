import {SET_FOCUS, DELETE_FOCUS, TOGGLE_FOCUS} from '../actions/FocusActionCreators';

function focusReducer(state={}, action){
  switch(action.type){
    case SET_FOCUS:
      return {text:action.text,done:false,set:true};
    case DELETE_FOCUS:
      return {...state, text:null, set:false};
    case TOGGLE_FOCUS:
      return {...state, done:!state.done};
    default:
      return state;
  }
}
export default focusReducer;
