import React from 'react';
import FeedSettings from '../components/FeedSettings';
import Tabs from '../components/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuoteFeedActionCreators from '../../../actions/QuoteFeedActionCreators.js';
import * as QuoteActionCreators from '../../../actions/QuoteActionCreators.js';

const QuoteSettings = ({ 
  quotes,
  addFeed,
  removeFeed,
  changeFeed,
  toggleNewQuote,
  addQuote,
  removeQuote,
  updateQuote
}) => {
  console.log(quotes);
  
  return (
    <div>
      <FeedSettings
        onAddFeed={addFeed}
        quoteFeeds={quotes.quoteFeeds}
        onChangeFeed={changeFeed}
        currentFeed={quotes.currentFeed.feedName}
        showNewQuote={quotes.showNewQuote}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        quoteFeeds={quotes.quoteFeeds}
        onChangeFeed={changeFeed} 
        currentFeed={quotes.currentFeed}
        activeTab={quotes.currentFeed.feedName} 
        showNewQuote={quotes.showNewQuote}
        onRemoveFeed={removeFeed}
        onToggleNewQuote={toggleNewQuote}
        onAddQuote={addQuote}
        onRemoveQuote={removeQuote}
        onUpdateQuote={updateQuote}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = dispatch => {
  return Object.assign(
    {},
    bindActionCreators(QuoteFeedActionCreators, dispatch),
    bindActionCreators(QuoteActionCreators, dispatch),
    // { toggleLike: (feedName, id) => dispatch(toggleLike(feedName, id)) }
  );
};
const QuoteSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteSettings);

export default QuoteSettingsContainer;
