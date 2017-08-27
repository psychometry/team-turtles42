import {combineReducers} from 'redux';
import todoReducers from './todoReducers';
import focusReducer from './focusReducer';
import appReducer from './appReducer';
import timeReducer from './timeReducer';
import bgReducer from './bgReducer';
import nameReducer from './nameReducer';
import { currentFeed, quoteFeeds, showNewQuote } from './quoteFeedReducers';

const rootReducer=combineReducers(
  {
    app:appReducer,
    time:timeReducer,
    focus:focusReducer,
    todo:todoReducers,
    background:bgReducer,
    name:nameReducer,
    currentFeed,
    quoteFeeds,
    showNewQuote,
  }
);

export default rootReducer;
