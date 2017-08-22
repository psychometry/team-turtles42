import {DISPLAY, HIDE, TOGGLE} from '../actions/AppActionCreators';

function appReducer(state={},action){
  switch(action.type){
    case DISPLAY:
      return {...state, [action.app]:true};
    case HIDE:
      return {...state, [action.app]:false};
    case TOGGLE:
      return {...state,[action.app]:!state[action.app]};
    default:
      return state;
  }
}
 export default appReducer;
