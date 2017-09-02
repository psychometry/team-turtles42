import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 1em;
  opacity: .75;
  label select {
    margin-left: 10px;
    max-width: 100px;
    color: ${({ theme }) => theme.white};
    padding: 0;
    background: transparent; 
    outline: none;
    border: none;
  }
`;

const propTypes = {
  quotes: PropTypes.object.isRequired,
};

const SelectFeed = ({ quotes, onChangeFeed }) => {
  const { feedsById, currentFeed } = quotes;
  const options = Object.keys(feedsById).map(feedId => {
    const feed = feedsById[feedId];

    return (
      <option 
        key={feedId} 
        data-feed-id={feedId} 
        value={feed.feedName}
      >
        {feed.feedName}
      </option>
    ); 
  });

  return (
    <Div>
      <label>
        Feed: 
        <select 
          value={currentFeed.feedName}
          onChange={event => {
            const feedId = event.target.options[event.target.selectedIndex].dataset.feedId;
            onChangeFeed(feedId, event.target.value)}
          }
        >
          {options}
        </select>
      </label>
    </Div>
  )
};

SelectFeed.propTypes = propTypes;

export default SelectFeed;
