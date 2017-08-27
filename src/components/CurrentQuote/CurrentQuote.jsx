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
  currentQuote: PropTypes.object.isRequired,
  quoteFeeds: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired 
};

const CurrentQuote = ({ currentQuote, quoteFeeds, toggleLike }) => {
  const { feedName, quote } = currentQuote;
  const { id, text, source, liked } = quote;
  
  let heart = 'empty heart icon';
  
  if (liked) {
    heart = 'heart icon';
  }
  
  return (
    <Container>
      <blockquote>
        <Quote>{text}</Quote>
        <Source>
          {source} <i onClick={() => toggleLike(feedName, id)} className={heart} />
        </Source>
      </blockquote> 
    </Container>
  );
};

CurrentQuote.propTypes = propTypes;

export default CurrentQuote;
