import types from '../../actions/QuotesActionCreators';

const currentFeed = (state = {}, action) =>{
  // console.log('CURRENT FEED', state, action);
  switch (action.type) {
    case types.CHANGE_FEED:
      return { feedId: action.feedId, feedName: action.feedName };
    // Set currentFeed to 'Default' if a feed is removed
    case types.REMOVE_FEED:
      return { feedId: 'Default', feedName: 'Default' };
    default:
      return state;
  }
};

export default currentFeed;