import React from 'react';
import FeedSettings from '../components/FeedSettings';
import Tabs from '../components/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuotesActionCreators from '../../../actions/QuotesActionCreators.js';

const QuoteSettings = ({ 
  quotes,
  addFeed,
  removeFeed,
  changeFeed,
  toggleNewQuote,
  addQuote,
  removeQuote,
  updateQuote,
  toggleLike
}) => {
  
  return (
    <div>
      <FeedSettings
        onAddFeed={addFeed}
        quoteFeeds={quotes.quoteFeeds}
        onChangeFeed={changeFeed}
        currentFeed={quotes.currentFeed}
        showingNewQuote={quotes.showingNewQuote}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        quoteFeeds={quotes.quoteFeeds}
        onChangeFeed={changeFeed} 
        currentFeed={quotes.currentFeed}
        activeTab={quotes.currentFeed} 
        showingNewQuote={quotes.showingNewQuote}
        onRemoveFeed={removeFeed}
        onToggleNewQuote={toggleNewQuote}
        onAddQuote={addQuote}
        onRemoveQuote={removeQuote}
        onUpdateQuote={updateQuote}
        onToggleLike={toggleLike}
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
    bindActionCreators(QuotesActionCreators, dispatch),
  );
};

const QuoteSettingsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(QuoteSettings);

export default QuoteSettingsContainer;
