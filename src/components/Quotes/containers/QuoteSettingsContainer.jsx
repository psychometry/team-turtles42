import React from 'react';
import FeedSettings from '../components/FeedSettings';
import Tabs from '../components/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuoteFeedActionCreators from '../../../actions/QuoteFeedActionCreators.js';
import * as QuoteActionCreators from '../../../actions/QuoteActionCreators.js';

const QuoteSettings = ({ 
  quoteFeeds,
  currentFeed, 
  addFeed,
  removeFeed,
  changeFeed,
  showNewQuote,
  toggleNewQuote,
  addQuote,
  removeQuote,
  updateQuote
}) => {

  return (
    <div>
      <FeedSettings
        onAddFeed={addFeed}
        quoteFeeds={quoteFeeds}
        onChangeFeed={changeFeed}
        currentFeed={currentFeed.name}
        showNewQuote={showNewQuote}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        quoteFeeds={quoteFeeds}
        onChangeFeed={changeFeed} 
        currentFeed={currentFeed}
        activeTab={currentFeed.name} 
        showNewQuote={showNewQuote}
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
    quoteFeeds: state.quoteFeeds,
    currentFeed: state.currentFeed,
    showNewQuote: state.showNewQuote
  };
};

const mapDispatchToProps = dispatch => {
  return Object.assign(
    {},
    bindActionCreators(QuoteFeedActionCreators, dispatch),
    bindActionCreators(QuoteActionCreators, dispatch)
  );
};
const QuoteSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteSettings);

export default QuoteSettingsContainer;
