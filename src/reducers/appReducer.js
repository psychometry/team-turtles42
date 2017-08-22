import {SHOW, HIDE} from '../actions/actions';

function appReducer(state={},action){
  switch(action.type){
    case SHOW:
      return {...state, [action.app]:true};
    case HIDE:
      return {...state, [action.app]:false};
    default:
      return state;
  }
}
 export default appReducer;
