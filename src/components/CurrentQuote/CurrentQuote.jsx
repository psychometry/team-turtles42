import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  font-weight: 300;
  `;
const Quote = styled.p`
  font-size: 1.25em;
  text-shadow: 0 1px 5px rgba(0,0,0,.1);
  `;
const Source = styled.p`
  font-size: 1em;
  color: white;
  text-shadow: 0 1px 5px rgba(0,0,0,.1);
  .heart {
    &:hover {
      cursor: pointer;
    }
  }
`;
const propTypes = {
  quotes: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired 
};

const CurrentQuote = ({ quotes, toggleLike }) => {
  const { quoteFeeds, currentFeed: feedName } = quotes;
  
  // Load random quote
  const currentFeed = quoteFeeds.find(feed => {
    return feed.feedName === feedName;
  });
  const { quotes: currentQuotes } = currentFeed;
  const randomQuote = currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
  const { id, text, source, liked } = randomQuote;
  
  let heart = 'empty heart icon';
  if (liked) heart = 'heart icon';

  return (
    <Container>
      <blockquote>
        <Quote>{text}</Quote>
        <Source>
          {source}
          <i onClick={() => toggleLike(feedName, id)} className={heart} />
        </Source>
      </blockquote> 
    </Container>
  );
};

CurrentQuote.propTypes = propTypes;

export default CurrentQuote;
