import { combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';
import types from '../actions/QuotesActionCreators';

export const currentFeed = (state = {}, action) =>{
  // console.log('CURRENT FEED', state, action);
  
  switch (action.type) {
    case types.CHANGE_FEED:
      return { 
        feedId: action.feedId, 
        feedName: action.feedName
      };
    // Sets currentFeed to 'Default' if a feed is removed:
    case types.REMOVE_FEED:
      return { 
        feedId: 'Default', 
        feedName: 'Default'
      };
    default:
      return state;
  }
};

export const quotesById = (state = {}, action) => {
  // console.log('QUOTES BY ID', state, action);

  switch (action.type) {
    case types.ADD_QUOTE:
      return {
        [uuid()]: {
          feedId: action.feedId,
          text: action.text,
          source: action.source, 
          liked: false
        },
        ...state
      }; 
    case types.REMOVE_QUOTE:
      const { [action.quoteId]: removed, ...rest } = state;
      return rest;
    // Remove all quotes in feed on remove feed
    case types.REMOVE_FEED: 
      // filter and reduce quotes to those that are not in removed feed 
      return Object.keys(state)
        .filter(quoteId => state[quoteId].feedId !== action.feedId)
        .reduce((nextState, quoteId) => {
          nextState[quoteId] = state[quoteId];
          return nextState;
      }, {});
    case types.UPDATE_QUOTE:
      return {
        ...state,
        [action.quoteId]: action.quote
      };
    case types.TOGGLE_FAVORITE:
      return {
        ...state,
        [action.quoteId]: {
          ...state[action.quoteId],
          liked: !state[action.quoteId].liked,
        }
      };
    default:
      return state;
  }
};

export const feedsById = (state = {}, action) => {
  // console.log('FEEDS BY ID', state, action);

  switch (action.type) {
    case types.ADD_FEED:
      return {
        ...state,
        [uuid()]: {
          feedName: action.feedName,
          quoteIds: [],
        }
      };
    case types.REMOVE_FEED:
      const { [action.feedId]: removed, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export const quotesUi = (state = {}, action) => {
  // console.log('QUOTES UI', state, action);

  switch (action.type) {
    // Set currentFeed to null to get a new random quote
    case types.CHANGE_FEED:
      return { 
        ...state,
        currentQuoteId: null
      };
    // Set activeTab to 'Default' on removeFeed
    case types.REMOVE_FEED:
      return {
        ...state,
        activeTab: 'Default'
      }
    case types.SET_CURRENT_QUOTE:
      return {
        ...state,
        currentQuoteId: action.quoteId
      };
    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: action.feedId
      };
    case types.TOGGLE_NEW_QUOTE:
      return {
        ...state,
        showNewQuote: !state.showNewQuote
      };
    default:
      return state;
  }
};

const quotes = combineReducers({ feedsById, quotesById, currentFeed, quotesUi });

export default quotes;