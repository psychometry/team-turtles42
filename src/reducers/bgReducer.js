import {SET_BACKGROUND} from '../actions/BgActionCreators';

function bgReducer(state='',action){
  switch(action.type){
    case SET_BACKGROUND:
      return action.url;
    default:
      return state;
  }
}

export default bgReducer;
