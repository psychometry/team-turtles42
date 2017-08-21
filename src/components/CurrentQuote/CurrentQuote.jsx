import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string, 
    source: PropTypes.string, 
    liked: PropTypes.bool
  }),
  onLikeQuote: PropTypes.func.isRequired 
}

const defaultProps = {
  quote: { text: "One love", source: "Bob Marley", liked: false },
  onLikeQuote: () => {}
};

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

const CurrentQuote = ({ quote, onLikeQuote }) => {
  const { text, source, liked } = quote;
  let heart = 'empty heart icon';
  
  if (liked) {
    heart = 'heart icon';
  }
  
  return (
    <Container>
      <blockquote>
        <Quote>{text}</Quote>
        <Source>
          {source} <i onClick={onLikeQuote} className={heart} />
        </Source>
      </blockquote> 
    </Container>
  );
};

CurrentQuote.propTypes = propTypes;
CurrentQuote.defaultProps = defaultProps;

export default CurrentQuote;
