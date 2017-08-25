import {SET_NAME} from '../actions/NameActionCreators';

function nameReducer(state='', action){
  switch(action.type){
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}

export default nameReducer;
