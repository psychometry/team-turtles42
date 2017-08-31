// import { combineReducers } from 'redux';
import v4 from 'uuid/v4';
import * as types from '../actions/QuotesActionCreators';

const quote = (state, action) => {
  switch (action.type) {
    case types.ADD_QUOTE:
      return {
        id: v4(), 
        text: action.text,
        source: action.source, 
        liked: false
      };
    case types.TOGGLE_LIKE:
      return Object.assign({}, state, {
        liked: !state.liked
      });
    default:
      return state;
  }
};

export const quotes = (state, action) => {
  const quoteIndex = state.findIndex(quote => quote.id === action.id);

  switch (action.type) {
    case types.ADD_QUOTE:
      return [
        quote(undefined, action),
        ...state
      ]; 
    case types.REMOVE_QUOTE:
      return [
        ...state.slice(0, quoteIndex),
        ...state.slice(quoteIndex + 1)
      ];
    case types.UPDATE_QUOTE:
      return [
        ...state.slice(0, quoteIndex), 
        action.quote,
        ...state.slice(quoteIndex + 1)
      ];
    case types.TOGGLE_LIKE:
      return [
        ...state.slice(0, quoteIndex), 
        quote(state[quoteIndex], action),
        ...state.slice(quoteIndex + 1)
      ];
    default:
      return state;
  }
};

const quoteFeed = (state, action) => {
  switch (action.type) {
    case types.ADD_FEED:
      return {
        feedName: action.feedName,
        quotes: [],
      };
    case types.ADD_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case types.REMOVE_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case types.UPDATE_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case types.TOGGLE_LIKE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    default:
      return state;
  }
};

export const quoteFeeds = (state, action) => {
  const feedIndex = state.findIndex(feed => feed.feedName === action.feedName);

  switch (action.type) {
    case types.ADD_FEED:
      return [
        ...state,
        quoteFeed(undefined, action)
      ];

    case types.REMOVE_FEED:
      return [
        ...state.slice(0, feedIndex),
        ...state.slice(feedIndex + 1)
      ]
    case types.ADD_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case types.REMOVE_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case types.UPDATE_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case types.TOGGLE_LIKE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)    
      ];
    default:
      return state;
  }
};

const quotesReducer = (state = {}, action) => {
  // console.log(state, action);
  switch (action.type) {
    case types.ADD_FEED:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.REMOVE_FEED:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.ADD_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.REMOVE_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.UPDATE_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.TOGGLE_LIKE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case types.TOGGLE_NEW_QUOTE:
      return Object.assign({}, state, {
        showingNewQuote: !state.showingNewQuote
      });
    case types.CHANGE_FEED:
      return Object.assign({}, state, {
        currentFeed: action.feedName 
      });
    case types.SET_CURRENT_QUOTE:
      return Object.assign({}, state, {
        currentQuoteId: action.id
      });
    default:
      return state;
  }
};

// const showNewQuote = (state = false, action) => {
//   switch (action.type) {
//    case types.TOGGLE_NEW_QUOTE:
//       return Object.assign({}, state, {
//         showingNewQuote: !state.showingNewQuote
//       });
//     default:
//       return state;
//   }
// };

// const quotesReducers = combineReducers({ quotesReducer, showNewQuote });

export default quotesReducer;
