import quotes, * as reducers from './quotes';
import types from '../actions/QuotesActionCreators';
import { feedsById, quotesById, currentFeed } from '../utilities';

// Initial State
const initialState = {
  feedsById,
  quotesById,
  currentFeed,
  quotesUi: {
    activeTab: 'Default',
    currentQuoteId: null,
    showNewQuote: false
  }
};
const { quotesUi } = initialState;

// Test Feeds
const defaultFeedName = 'Default';
const defaultFeedId = 'Default';
const defaultFeed = feedsById[defaultFeedId];
const newFeedName = 'Favorite Quotes';
const newFeeds = reducers.feedsById(feedsById, {
  type: types.ADD_FEED,
  feedName: newFeedName
});
const newFeedId = Object.keys(newFeeds)[1];

// Test Quotes
const quotesBefore = Object.keys(quotesById)
  .filter((id, i) => i < 2)
  .reduce((nextState, id) => {
    nextState[id] = quotesById[id];
    return nextState;
  }, {});
const quoteIdsBefore = Object.keys(quotesBefore);
const firstQuoteId = quoteIdsBefore[0];
const secondQuoteId = quoteIdsBefore[1];
const firstQuote = quotesBefore[firstQuoteId];
const secondQuote = quotesBefore[secondQuoteId];
const newQuote = {
  text: 'New quote text',
  source: 'New quote source'
};

describe('initial state', () => {
  it('should return initial state', () => {
    expect(quotes(initialState, {})).toEqual(initialState);
  });
});

describe('#feedsById', () => {
  it('should increase feedsById\'s length by 1', () => {
    const newFeedIds = Object.keys(newFeeds);
    expect(newFeedIds).toHaveLength(Object.keys(feedsById).length + 1);
  });

  it('should add a new quote feed', () => {
    const newFeedId = Object.keys(newFeeds)[1];
    const newFeed = newFeeds[newFeedId];
    
    expect(newFeeds).toEqual(expect.objectContaining({
      [defaultFeedId]: defaultFeed,
      [newFeedId]: newFeed
    }));
  });

  it('should remove a quote feed', () => {
    expect(reducers.feedsById(feedsById, {
      type: types.REMOVE_FEED,
      feedId: defaultFeedName
    })).toEqual({});
  });
});

describe('#quotesById', () => {
  it('should add a quote', () => {
    const quoteIdsAfter = Object.keys(reducers.quotesById(quotesBefore, {
      type: types.ADD_QUOTE,
      feedName: defaultFeedName,
      ...newQuote
    }));
    
    expect(quoteIdsAfter).toHaveLength(quoteIdsBefore.length + 1);
  });
  
  it('should remove a quote', () => {
    const quoteIdsAfter = Object.keys(reducers.quotesById(quotesBefore, {
      type: types.REMOVE_QUOTE,
      feedName: defaultFeedName,
      quoteId: firstQuoteId
    }));
    
    expect(quoteIdsAfter).toHaveLength(quoteIdsBefore.length - 1);
  });
  
  it('should update a quote', () => {
    expect(reducers.quotesById(quotesBefore, {
      type: types.UPDATE_QUOTE,
      feedName: defaultFeedName,
      quote: newQuote,
      quoteId: secondQuoteId
    })).toEqual(expect.objectContaining({
      [firstQuoteId]: firstQuote,
      [secondQuoteId]: {
        ...newQuote
      }
    }));
  });

  it('should toggle a quote like', () => {
    expect(reducers.quotesById(quotesBefore, {
      type: types.TOGGLE_FAVORITE,
      feedId: defaultFeedId,
      quoteId: secondQuoteId
    })).toEqual(expect.objectContaining({
      [firstQuoteId]: firstQuote,
      [secondQuoteId]: {
        ...secondQuote,
        liked: !secondQuote.liked
      }
    }));
  });
});

describe('#currentFeed', () => {
  it('should change the current quote feed to a new quote feed', () => {
    expect(reducers.currentFeed(currentFeed, {
      type: types.CHANGE_FEED,
      feedId: newFeedId,
      feedName: newFeedName
    })).toEqual({
      feedId: newFeedId,
      feedName: newFeedName
    });
  });
});

describe('#quotesUi', () => {
  it('should toggle the new quote input', () => {
    expect(reducers.quotesUi(quotesUi, {
      type: types.TOGGLE_NEW_QUOTE
    })).toEqual({
      ...quotesUi,
      showNewQuote: !quotesUi.showNewQuote
    });
  });

  it('should set a current quote', () => {
    expect(reducers.quotesUi(quotesUi, {
      type: types.SET_CURRENT_QUOTE,
      quoteId: firstQuoteId
    })).toEqual(expect.objectContaining({
      ...quotesUi,
      currentQuoteId: firstQuoteId
    }));
  });
});