import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { randomIndex } from '../../utilities.js';

const Container = styled.div`
  color: ${({theme}) => theme.white};
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
  `;
const Source = styled.p`
  font-size: 1.15em;
  opacity: .75;
  .heart {
    &:hover {
      cursor: pointer;
    }
  }
`;

const propTypes = {
  quotes: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  setCurrentQuote: PropTypes.func.isRequired
};

const CurrentQuote = ({ 
  quotes, 
  toggleFavorite, 
  setCurrentQuote 
}) => {
  const { quotesById, currentFeed } = quotes;
  const { currentQuoteId } = quotes.quotesUi;
  
  // TODO: Move selector to quotesById reducer
  // Filter and reduce currentQuotes object from quotesById
  const currentQuotes = Object.keys(quotesById)
    .filter(quoteId => quotesById[quoteId].feedId === currentFeed.feedId)
    .reduce((nextState, quoteId) => {
      quotesById[quoteId].quoteId = quoteId;
      nextState[quoteId] = quotesById[quoteId];
      return nextState;
  }, {});
  
  // Get currentQuoteIds array to generate random quote index
  const currentQuoteIds = Object.keys(currentQuotes);
  const randomQuoteId = currentQuoteIds[randomIndex(currentQuoteIds.length)]; 

  // Set quote to render currentQuote or a random quote
  const currentQuote = currentQuoteId 
    ? currentQuotes[currentQuoteId]
    : currentQuotes[randomQuoteId];

  // Set currentQuote if null
  if (!currentQuoteId && currentQuote) setCurrentQuote(currentQuote.quoteId);

  return (
    <Container>
      {currentQuote &&
        <blockquote>
          <Quote>“{currentQuote.text}”</Quote>
          <Source>
            {currentQuote.source + ' '}
              <i 
                onClick={() => {
                  toggleFavorite(currentQuote.feedId, currentQuote.quoteId)
                }} 
                className={
                  currentQuote.liked ? 'heart icon' : 'empty heart icon'
                } 
              />
          </Source>
        </blockquote> 
      }
    </Container>
  )
};

CurrentQuote.propTypes = propTypes;

export default CurrentQuote;
