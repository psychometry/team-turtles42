import types from '../../actions/QuotesActionCreators';

const quotesUi = (state = {}, action) => {
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

export default quotesUi;