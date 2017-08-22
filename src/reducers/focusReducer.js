import {SET_FOCUS, DELETE_FOCUS, TOGGLE_FOCUS} from '../actions/actions';

function focusReducer(state={}, action){
  switch(action.type){
    case SET_FOCUS:
      return {name:action.text,done:false,set:true};
    case DELETE_FOCUS:
      return {...state, name:null, set:false};
    case TOGGLE_FOCUS:
      return {...state, done:!state.done};
    default:
      return state;
  }
}
export default focusReducer;
