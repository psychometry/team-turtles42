import { ADD_FEED, REMOVE_FEED, CHANGE_FEED } from '../actions/QuoteFeedActionCreators';

export const quoteFeedReducer = (state = [], action) => {
  const feedIndex = state.findIndex(feed => feed.name === action.name);

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
    
      if (state.length > 1) {
        return [
          ...state.slice(0, feedIndex),
          ...state.slice(feedIndex + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const currentFeedReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FEED:
      return action.newFeed;
    default:
      return state;
  }
};

