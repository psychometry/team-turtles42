export const ADD_FEED = 'ADD_FEED',
REMOVE_FEED = 'REMOVE_FEED',
CHANGE_FEED = 'CHANGE_FEED',
TOGGLE_NEW_QUOTE = 'TOGGLE_NEW_QUOTE',
ADD_QUOTE = 'ADD_QUOTE', 
REMOVE_QUOTE = 'REMOVE_QUOTE',
UPDATE_QUOTE = 'UPDATE_QUOTE',
TOGGLE_LIKE = 'TOGGLE_LIKE';

export const addFeed = feedName => {
  return {
    type: ADD_FEED,
    feedName
  };
};

export const removeFeed = feedName => {
  return {
    type: REMOVE_FEED,
    feedName
  }
};

export const changeFeed = (newFeed) => {
  return {
    type: CHANGE_FEED,
    newFeed
  };
};
export const toggleNewQuote = () => {
  return {
    type: TOGGLE_NEW_QUOTE
  }
};

export const addQuote = (feedName, text, source) => {
  return {
    type: ADD_QUOTE,
    feedName,
    text,
    source
  };
};

export const removeQuote = (feedName, id) => {
  return {
    type: REMOVE_QUOTE,
    feedName,
    id
  }
};

export const updateQuote = (feedName, quote) => {
  return {
    type: UPDATE_QUOTE,
    feedName,
    quote,
    id: quote.id
  }
};

export const toggleLike = (feedName, id) => {
  return {
    type: TOGGLE_LIKE,
    feedName,
    id
  }
};


