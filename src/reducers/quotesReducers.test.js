import quotesReducer, { quoteFeeds, quotes } from './quotesReducers';
import * as types from '../actions/QuotesActionCreators';
import defaultFeeds from '../defaultFeeds.json';

describe('quotes reducer', () => {
  const initialState = {
    currentFeed: 'Default',
    currentQuoteId: null,
    quoteFeeds: defaultFeeds,
    showingNewQuote: false
  };
  const testFeed = defaultFeeds[0];
  const testQuotes = testFeed.quotes;
  const testQuote = testQuotes[0];
  const newFeedName = 'Favorite Quotes';
  const newFeed = {
    feedName: newFeedName,
    quotes: [],
  };
  const updatedQuote = {
    text: 'Updated Text',
    source: 'Updated Source',
    id: testQuote.id
  };

  it('should return initial state', () => {
    expect(quotesReducer(initialState, {})).toEqual(initialState);
  });

  it('should add a quote feed', () => {
    expect(quoteFeeds(defaultFeeds, {
      type: types.ADD_FEED,
      feedName: newFeedName
    })).toEqual([
      ...defaultFeeds,
      newFeed
    ]);
  });

  it('should remove a quote feed', () => {
    const feeds = quoteFeeds(defaultFeeds, {
      type: types.ADD_FEED,
      feedName: newFeedName
    });
    const testFeedIndex = feeds.findIndex(feed => {
      return feed.feedName === newFeed.feedName
    });

    expect(quoteFeeds(feeds, {
      type: types.REMOVE_FEED,
      feedName: 'Favorite Quotes'
    })).toEqual([
      ...feeds.slice(0, testFeedIndex),
      ...feeds.slice(testFeedIndex + 1)
    ]);
  });

  it('should change the current quote feed to a new quote feed', () => {
    expect(quotesReducer(initialState, {
      type: types.CHANGE_FEED,
      feedName: newFeedName
    })).toEqual({
      ...initialState,
      currentFeed: newFeedName
    });
  });

  it('should add a quote', () => {
    expect(quotes(testQuotes, {
      type: types.ADD_QUOTE,
      feedName: testFeed.feedName,
      text: 'Test Text',
      source: 'Test Source'
    })).toHaveLength(testQuotes.length + 1);
  });

  it('should remove a quote', () => {
    expect(quotes(testQuotes, {
      type: types.REMOVE_QUOTE,
      feedName: testFeed.feedName,
      id: testQuotes[testQuotes.length - 1].id
    })).toHaveLength(testQuotes.length - 1);
  });

  it('should update a quote', () => {
    expect(quotes(testQuotes, {
      type: types.UPDATE_QUOTE,
      feedName: testFeed.feedName,
      quote: updatedQuote,
      id: testQuote.id
    })).toEqual([
      ...testQuotes.slice(0, 0),
      updatedQuote,
      ...testQuotes.slice(1)
    ]);
  });

  it('should toggle the new quote input', () => {
    expect(quotesReducer(initialState, {
      type: types.TOGGLE_NEW_QUOTE
    })).toEqual({
      ...initialState,
      showingNewQuote: !initialState.showingNewQuote
    });
  });

  // it('should toggle a quote like', () => {
  //   expect(quotes(testQuotes, {
  //     type: types.TOGGLE_LIKE,
  //     feedName: testFeed.feedName,
  //     id: testQuote.id
  //   })).toEqual([
  //     ...testQuotes.slice(0, testQuote.id),
  //     {
  //       ...testQuote,
  //       liked: !testQuote.liked
  //     },
  //     ...testQuotes.slice(testQuote.id + 1)
  //   ]);
  // });

  // it('should set a current quote', () => {
  //   expect(quotesReducer(initialState, {
  //     type: types.SET_CURRENT_QUOTE,
  //     id: // random quote id
  //   })).toEqual({
  //     ...initialState,
  //     currentQuoteId: // random quote id
  //   });
  // });
});