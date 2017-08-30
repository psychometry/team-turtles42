import React from 'react';
import styled from 'styled-components';
import SelectFeed from '../components/SelectFeed';
import NewFeed from '../components/NewFeed';

const Div = styled.div`
  width: 460px;
  display: flex;
  justify-content: space-between;
  .feeds {
    display: flex;
    justify-content: space-between;
  }
`;

const NewQuote = styled.a`
  height: 30px;
  border: none;
  color: ${({showingNewQuote}) => showingNewQuote ? 'white' : 'rgba(255,255,255,.5)'};
  background: transparent;
  .plus.icon {
    font-size: .9em;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
const FeedSettings = ({ 
  quoteFeeds, 
  currentFeed,
  showingNewQuote,
  onAddFeed,
  onChangeFeed, 
  onToggleNewQuote
}) => {

  const handleNewQuoteClick = () => {
    onToggleNewQuote();
  }
  return (
    <Div>
      <div className="feeds">
        <SelectFeed 
          quoteFeeds={quoteFeeds}
          currentFeed={currentFeed}
          onChangeFeed={onChangeFeed}
        />
        <NewFeed onAddFeed={onAddFeed} />  
      </div>
      <NewQuote showingNewQuote={showingNewQuote} onClick={handleNewQuoteClick}>
        <i className="plus icon" />
        Add Quote
      </NewQuote>
    </Div>
  );
};

export default FeedSettings;