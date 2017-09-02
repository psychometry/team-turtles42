import uuid from 'uuid/v4';
import types from '../../actions/QuotesActionCreators';

const quotesById = (state = {}, action) => {
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
    // Remove all quotes in feed
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

export default quotesById;