import v4 from 'uuid/v4';
// import { combineReducers } from 'redux';
import { ADD_FEED, REMOVE_FEED, CHANGE_FEED } from '../actions/QuoteFeedActionCreators';
import { TOGGLE_NEW_QUOTE, ADD_QUOTE, REMOVE_QUOTE, UPDATE_QUOTE } from '../actions/QuoteActionCreators';

// const quotes = (state = [], action) => {
//   const feedIndex = state.findIndex(feed => feed.name === action.name);
//   switch (action.type) {
//     case ADD_QUOTE:
//     case REMOVE_QUOTE:
//     case UPDATE_QUOTE:
//     default:
//       return state;
//   }
// };

export const quoteFeeds = (state = [], action) => {
  const feedIndex = state.findIndex(feed => feed.name === action.name);
  let quotes, quoteIndex;

  switch (action.type) {
    case ADD_FEED:
      return [
        ...state,
        {
          name: action.name,
          quotes: [],
        }
      ];
    case REMOVE_FEED:
      return [
        ...state.slice(0, feedIndex),
        ...state.slice(feedIndex + 1)
      ];
    case ADD_QUOTE:
      return [
        ...state.slice(0, feedIndex), 
        Object.assign({}, state[feedIndex], {
          name: action.name,
          quotes: [
            { 
              id: v4(), 
              text: action.text,
              source: action.source, 
              liked: false 
            },
            ...state[feedIndex].quotes
          ] 
        }),
        ...state.slice(feedIndex + 1)
      ];
    case REMOVE_QUOTE:
      quotes = state[feedIndex].quotes;
      quoteIndex = quotes.findIndex(quote => quote.id === action.id);
      return [
        ...state.slice(0, feedIndex),
        Object.assign({}, state[feedIndex], {
          quotes: [
            ...quotes.slice(0, quoteIndex),
            // removed quote
            ...quotes.slice(quoteIndex + 1)
          ]
        }),
        ...state.slice(feedIndex + 1)
      ];
    case UPDATE_QUOTE:
      quotes = state[feedIndex].quotes;
      quoteIndex = quotes.findIndex(quote => quote.id === action.quote.id);

      return [
        ...state.slice(0, feedIndex),
        Object.assign({}, state[feedIndex], {
          quotes: [
            ...quotes.slice(0, quoteIndex), 
            action.quote,
            ...quotes.slice(quoteIndex + 1)
          ]
        }),
        ...state.slice(feedIndex + 1)
      ];
    default:
      return state;
  }
};

export const currentFeed = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FEED:
      return action.newFeed;
    default:
      return state;
  }
};

export const showNewQuote = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_NEW_QUOTE:
      return !state;
    default:
      return state;
  }
};

// const quoteFeedReducers = combineReducers({

// });

// export default quoteFeedReducers;

