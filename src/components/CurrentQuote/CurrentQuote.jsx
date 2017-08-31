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
  const { quoteFeeds, currentFeed: feedName, currentQuoteId } = quotes;
  
    // Get currentFeed for Default feed if no quotes in currentFeed
    const currentFeed = quoteFeeds.find(feed => {
    return feed.feedName === feedName && feed.quotes.length;
  }) || quoteFeeds[0];

  const { quotes: currentQuotes } = currentFeed;

  // Set quote to render currentQuote or a random quote initially
  const currentQuote = currentQuotes.find(quote => quote.id === currentQuoteId);
  const quote = currentQuote || currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
  
  // Set currentQuote if null
  if (!currentQuote) setCurrentQuote(quote.id);

  const { id, text, source, liked } = quote;

  let heart = 'empty heart icon';
  if (liked) heart = 'heart icon';

  return (
    <Container>
      <blockquote>
        <Quote>{text}</Quote>
        <Source>
          {source}
          {' '}<i onClick={() => toggleLike(feedName, id)} className={heart} />
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
