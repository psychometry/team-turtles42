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
const CurrentQuote = ({ quotes, toggleLike, setCurrentQuote }) => {
  const handleLike = (feedName, id) => {
    toggleLike(feedName, id);
    setCurrentQuote(id);
  }
  const { quoteFeeds, currentFeed: feedName, currentQuoteId } = quotes;
  
  // Load random quote
  const currentFeed = quoteFeeds.find(feed => {
    // currentFeed for Default feed if no quotes in currentFeed
    return feed.feedName === feedName && feed.quotes.length;
  }) || quoteFeeds[0];
  const { quotes: currentQuotes } = currentFeed;

  // Set quote to render currentQuote or a random quote initially
  const quote = currentQuotes.find(quote => quote.id === currentQuoteId)
  || currentQuotes[Math.floor(Math.random() * currentQuotes.length)];

  const { id, text, source, liked } = quote;

  let heart = 'empty heart icon';
  if (liked) heart = 'heart icon';

  return (
    <Container>
      <blockquote>
        <Quote>{text}</Quote>
        <Source>
          {source}
          {' '}<i onClick={() => handleLike(feedName, id)} className={heart} />
        </Source>
      </blockquote> 
    </Container>
  )
};

CurrentQuote.propTypes = {
  quotes: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired 
};
CurrentQuote.defaultProps = {
  quotes: {},
  toggleLike: () => {}
}

export default CurrentQuote;
