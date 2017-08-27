export const ADD_FEED = 'ADD_FEED', 
             REMOVE_FEED = 'REMOVE_FEED',
             CHANGE_FEED = 'CHANGE_FEED';

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