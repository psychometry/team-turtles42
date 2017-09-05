import {SET_BACKGROUND, SET_UPDATE_TIME, SET_OPTION} from '../actions/BgActionCreators';
import {combineReducers} from 'redux';
function bgReducer(state='',action){
  switch(action.type){
    case SET_BACKGROUND:
      return action.url;
    default:
      return state;
  }
}
function updateReducer(state={},action){
  switch(action.type){
    case SET_UPDATE_TIME:
      return action.time;
    default:
      return state;
  }
}
function optionReducer(state='unsplash',action){
  switch(action.type){
    case SET_OPTION:
      return action.option
    default:
      return state;
  }
}
const backgroundReducer=combineReducers(
  {
    bg:bgReducer,
    updateTime:updateReducer,
    option:optionReducer
  }
);
export default backgroundReducer;
