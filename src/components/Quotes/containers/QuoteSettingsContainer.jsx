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
  changeTab,
  toggleNewQuote,
  addQuote,
  removeQuote,
  editQuote,
  updateQuote,
  toggleFavorite
}) => {
  
  return (
    <div>
      <FeedSettings
        feedsById={quotes.feedsById}
        currentFeed={quotes.currentFeed}
        showNewQuote={quotes.quotesUi.showNewQuote}
        activeTab={quotes.quotesUi.activeTab}
        onAddFeed={addFeed}
        onChangeFeed={changeFeed}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        feedsById={quotes.feedsById}
        quotesById={quotes.quotesById}
        activeTab={quotes.quotesUi.activeTab}
        showNewQuote={quotes.quotesUi.showNewQuote}
        onChangeTab={changeTab} 
        onRemoveFeed={removeFeed}
        onToggleNewQuote={toggleNewQuote}
        onAddQuote={addQuote}
        onRemoveQuote={removeQuote}
        onUpdateQuote={updateQuote}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    quotesUi: state.quotesUi
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
