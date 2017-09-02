import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  quotesUi: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  setCurrentQuote: PropTypes.func.isRequired
};

// const defaultProps = {
//   quotes: {},
//   toggleFavorite: () => {}
// }

const CurrentQuote = ({ 
  quotes, 
  quotesUi,
  toggleFavorite, 
  setCurrentQuote 
}) => {
  const { quotesById, currentFeed } = quotes;
  const { currentQuoteId } = quotesUi;
  
  // TODO: Move/Create selector in reducer
  const currentQuoteIds = Object.keys(quotesById);
  const currentQuotes = currentQuoteIds
    .filter(quoteId => quotesById[quoteId].feedId === currentFeed.feedId)
    .reduce((nextState, quoteId) => {
      quotesById[quoteId].quoteId = quoteId;
      nextState[quoteId] = quotesById[quoteId];
      return nextState;
    }, {});

  // Set quote to render currentQuote or a random quote
  const currentQuote = currentQuoteId 
    ? currentQuotes[currentQuoteId]
    : currentQuotes[
      currentQuoteIds[Math.floor(Math.random() * currentQuoteIds.length)]
    ];
  
  // Set currentQuote if null
  if (!currentQuoteId) setCurrentQuote(currentQuote.quoteId);

  const { quoteId, feedId, text, source, liked } = currentQuote;

  let heart = 'empty heart icon';
  if (liked) heart = 'heart icon';

  return (
    <Container>
      <blockquote>
        <Quote>“{text}”</Quote>
        <Source>
          {source}
          {' '}<i onClick={() => toggleFavorite(feedId, quoteId)} className={heart} />
        </Source>
      </blockquote> 
    </Container>
  )
};

CurrentQuote.propTypes = propTypes;

export default CurrentQuote;
