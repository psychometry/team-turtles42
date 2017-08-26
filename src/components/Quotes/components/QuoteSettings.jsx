import React from 'react';
import FeedSettings from '../components/FeedSettings';
import Tabs from '../components/Tabs';

const QuoteSettings = ({ 
  quoteFeeds,
  currentFeed, 
  addFeed,
  removeFeed,
  changeFeed,
  showingNewQuote,
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
        showingNewQuote={showingNewQuote}
        onToggleNewQuote={toggleNewQuote}
      /> 
      <Tabs 
        quoteFeeds={quoteFeeds}
        onChangeFeed={changeFeed} 
        currentFeed={currentFeed}
        activeTab={currentFeed.name} 
        onRemoveFeed={removeFeed}
        showingNewQuote={showingNewQuote}
        onAddQuote={addQuote}
        onRemoveQuote={removeQuote}
        onUpdateQuote={updateQuote}
      />
    </div>
  );
};

export default QuoteSettings;