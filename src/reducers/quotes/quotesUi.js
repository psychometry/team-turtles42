// import { combineReducers } from 'redux';
import types from '../../actions/QuotesUiActionCreators';

const quotesUi = (state = {}, action) => {
  // console.log('QUOTES UI', state, action);

  switch (action.type) {
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

export default quotesUi;