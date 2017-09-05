import {combineReducers} from 'redux';
import todoReducers from './todoReducers';
import focusReducer from './focusReducer';
import appReducer from './appReducer';
import timeReducer from './timeReducer';
import bgReducer from './bgReducer';
import nameReducer from './nameReducer';
import quotes from './quotes';

const rootReducer=combineReducers(
  {
    apps:appReducer,
    time:timeReducer,
    focus:focusReducer,
    todo:todoReducers,
    background:bgReducer,
    name:nameReducer,
    quotes
  }
);

export default rootReducer;
