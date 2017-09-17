import {SHOWIMAGEINFO, CLOSEIMAGEINFO, SETIMAGE} from '../actions/SettingActionCreators';
import {combineReducers} from 'redux';
function displayInfo(state=false,action){
  switch(action.type){
    case SHOWIMAGEINFO:
      return true;
    case CLOSEIMAGEINFO:
      return false;
    default:
      return state;
  }
}
function image(state={},action){
  switch(action.type){
    case SETIMAGE:
      return action.img
    default:
      return state;
  }
}
const imageInfoReducer=combineReducers({displayInfo,image});
export default imageInfoReducer;
