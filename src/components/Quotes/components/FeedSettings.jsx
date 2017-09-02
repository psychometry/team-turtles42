import React from 'react';
import PropTypes from 'prop-types';
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
  color: ${({ theme }) => theme.white};
  opacity: ${({showNewQuote}) => showNewQuote ? '1' : '.75'};
  background: transparent;
  .plus.icon {
    font-size: .9em;
  }
  &:hover {
    color: ${({ theme }) => theme.white};
    opacity: 1;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const propTypes = {
  quotes: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  showNewQuote: PropTypes.bool.isRequired,
  onAddFeed: PropTypes.func.isRequired,
  onChangeFeed: PropTypes.func.isRequired,
  onToggleNewQuote: PropTypes.func.isRequired
};

const defaultProps = {
  activeTab: 'Default',
  showNewQuote: false
}

const FeedSettings = ({ 
  quotes,
  activeTab,
  showNewQuote,
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
          quotes={quotes}
          onChangeFeed={onChangeFeed}
        />
        <NewFeed onAddFeed={onAddFeed} />  
      </div>
      <NewQuote 
        showNewQuote={showNewQuote} 
        activeTab={activeTab} 
        onClick={handleNewQuoteClick}
      >
        <i className="plus icon" />
        Add Quote
      </NewQuote>
    </Div>
  );
};

FeedSettings.propTypes = propTypes;
FeedSettings.defaultProps = defaultProps;

export default FeedSettings;