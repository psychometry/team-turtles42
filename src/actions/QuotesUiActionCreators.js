const types = {
  SET_CURRENT_QUOTE: 'SET_CURRENT_QUOTE',
  CHANGE_TAB: 'CHANGE_TAB',
  TOGGLE_NEW_QUOTE: 'TOGGLE_NEW_QUOTE',
};

export default types;

export const changeTab = (feedId, feedName) => {
  return {
    type: types.CHANGE_TAB,
    feedId,
    feedName
  };
};

export const toggleNewQuote = () => {
  return {
    type: types.TOGGLE_NEW_QUOTE
  };
};

export const setCurrentQuote = quoteId => {
  return {
    type: types.SET_CURRENT_QUOTE,
    quoteId
  }
};