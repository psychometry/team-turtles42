import uuid from 'uuid/v4';
import types from '../../actions/QuotesActionCreators';

const feedsById = (state = {}, action) => {
  // console.log('FEEDS BY ID', state, action);

  switch (action.type) {
    case types.ADD_FEED:
      return {
        ...state,
        [uuid()]: {
          feedName: action.feedName,
          quoteIds: [],
        }
      };
    case types.REMOVE_FEED:
      const { [action.feedId]: removed, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default feedsById;