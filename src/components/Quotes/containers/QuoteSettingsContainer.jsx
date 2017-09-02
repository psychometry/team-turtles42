import React from 'react';
import FeedSettings from '../components/FeedSettings';
import Tabs from '../components/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuotesActionCreators from '../../../actions/QuotesActionCreators.js';
import * as QuotesUiActionCreators from '../../../actions/QuotesUiActionCreators.js';

const QuoteSettings = ({ 
  quotes,
  quotesUi,
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
        quotes={quotes}
        showNewQuote={quotesUi.showNewQuote}
        activeTab={quotesUi.activeTab}
        onAddFeed={addFeed}
        onChangeFeed={changeFeed}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        quotes={quotes}
        quotesUi={quotesUi}
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
    bindActionCreators(QuotesUiActionCreators, dispatch),
  );
};

const QuoteSettingsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(QuoteSettings);

export default QuoteSettingsContainer;
