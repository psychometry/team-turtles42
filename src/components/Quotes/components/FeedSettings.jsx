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

const AddQuote = styled.a`
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
  onAddFeed,
  currentFeed, 
  onChangeFeed, 
  onToggleNewQuote,
  onNewQuoteClick 
}) => {

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
      {/* <AddQuote showingNewQuote={showingNewQuote} onNewQuoteClick={onNewQuoteClick}>
        <i className="plus icon" />
        Add Quote
      </AddQuote> */}
    </Div>
  );
};

export default FeedSettings;