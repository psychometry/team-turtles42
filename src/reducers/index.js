import {combineReducers} from 'redux';
import todoReducers from './todoReducers';
import focusReducer from './focusReducer';
import appReducer from './appReducer';
import timeReducer from './timeReducer';
import bgReducer from './bgReducer';
import nameReducer from './nameReducer';
import imageInfoReducer from './settingReducer';
import quotes from './quotes';
import timer from './timer';

const rootReducer=combineReducers(
  {
    apps:appReducer,
    time:timeReducer,
    focus:focusReducer,
    todo:todoReducers,
    background:bgReducer,
    name:nameReducer,
    imageInfo:imageInfoReducer,
    quotes,
    timer
  }
);

export default rootReducer;
