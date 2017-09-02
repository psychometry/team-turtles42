import { combineReducers } from 'redux';
import feedsById from './feedsById';
import quotesById from './quotesById';
import currentFeed from './currentFeed';

const quotes = combineReducers({ feedsById, quotesById, currentFeed });

export default quotes;

