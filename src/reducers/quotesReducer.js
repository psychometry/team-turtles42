import v4 from 'uuid/v4';
import { 
  ADD_FEED, 
  REMOVE_FEED, 
  CHANGE_FEED,
  TOGGLE_NEW_QUOTE, 
  ADD_QUOTE, 
  REMOVE_QUOTE, 
  UPDATE_QUOTE, 
  TOGGLE_LIKE 
} from '../actions/QuotesActionCreators';

const quote = (state, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        id: v4(), 
        text: action.text,
        source: action.source, 
        liked: false
      };
    case TOGGLE_LIKE:
      return Object.assign({}, state, {
        liked: !state.liked
      });
    default:
      return state;
  }
};

const quotes = (state, action) => {
  const quoteIndex = state.findIndex(quote => quote.id === action.id);

  switch (action.type) {
    case ADD_QUOTE:
      return [
        ...state,
        quote(undefined, action)
      ]; 
    case REMOVE_QUOTE:
      return [
        ...state.slice(0, quoteIndex),
        ...state.slice(quoteIndex + 1)
      ];
    case UPDATE_QUOTE:
      return [
        ...state.slice(0, quoteIndex), 
        action.quote,
        ...state.slice(quoteIndex + 1)
      ];
    case TOGGLE_LIKE:
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
    case ADD_FEED:
      return {
        feedName: action.feedName,
        quotes: [],
      };
    case ADD_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case REMOVE_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case UPDATE_QUOTE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    case TOGGLE_LIKE:
      return Object.assign({}, state, {
        quotes: quotes(state.quotes, action)
      });
    default:
      return state;
  }
};

const quoteFeeds = (state, action) => {
  const feedIndex = state.findIndex(feed => feed.feedName === action.feedName);

  switch (action.type) {
    case ADD_FEED:
      return [
        ...state,
        quoteFeed(undefined, action)
      ];

    case REMOVE_FEED:
      return [
        ...state.slice(0, feedIndex),
        ...state.slice(feedIndex + 1)
      ]
    case ADD_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case REMOVE_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case UPDATE_QUOTE:
      return [
        ...state.slice(0, feedIndex),
        quoteFeed(state[feedIndex], action),
        ...state.slice(feedIndex + 1)
      ];
    case TOGGLE_LIKE:
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
  console.log(state, action);
  switch (action.type) {
    case ADD_FEED:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case REMOVE_FEED:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case CHANGE_FEED:
      return Object.assign({}, state, {
        currentFeed: action.feedName 
      }); 
    case TOGGLE_NEW_QUOTE:
      return Object.assign({}, state, {
        showingNewQuote: !state.showingNewQuote
      });
    case ADD_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case REMOVE_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case UPDATE_QUOTE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    case TOGGLE_LIKE:
      return Object.assign({}, state, {
        quoteFeeds: quoteFeeds(state.quoteFeeds, action)
      });
    default:
      return state;
  }
};

export default quotesReducer;
