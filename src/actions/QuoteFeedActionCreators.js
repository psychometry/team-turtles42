export const ADD_FEED = 'ADD_FEED', 
             REMOVE_FEED = 'REMOVE_FEED',
             CHANGE_FEED = 'CHANGE_FEED';

export const addFeed = name => {
  return {
    type: ADD_FEED,
    name
  };
};

export const removeFeed = name => {
  return {
    type: REMOVE_FEED,
    name
  }
};

export const changeFeed = (newFeed) => {
  return {
    type: CHANGE_FEED,
    newFeed
  };
};