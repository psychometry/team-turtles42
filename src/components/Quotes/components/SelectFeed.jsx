import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 1em;
  color: silver; 
  label select {
    margin-left: 10px;
    max-width: 100px;
    color: white;
    padding: 0;
    background: transparent;
    outline: none;
    border: none;
  }
`;

const propTypes = {
  currentFeed: PropTypes.string.isRequired,
  onChangeFeed: PropTypes.func.isRequired,
  quoteFeeds: PropTypes.arrayOf(PropTypes.shape({
    feedName: PropTypes.string.isRequired,
    quotes: PropTypes.array.isRequired,
  }))
};

const SelectFeed = ({ quoteFeeds, currentFeed, onChangeFeed }) => {
  const options = quoteFeeds.map(feed => {
    return (
      <option key={feed.feedName} value={feed.feedName}>
        {feed.feedName}
      </option>
    ); 
  });

  return (
    <Div>
      <label>
        Feed: 
        <select 
          value={currentFeed}
          onChange={event => onChangeFeed(event.target.value)}
        >
          {options}
        </select>
      </label>
    </Div>
  )
};

SelectFeed.propTypes = propTypes;

export default SelectFeed;
