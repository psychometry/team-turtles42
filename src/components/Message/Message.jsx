import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import toggleOnOff from '../../HOC';

const Container = styled.div`
  font-size: 4em;
  white-space: nowrap;
`;

const greeting = time => {
  const hour = time.getHours();
  switch (true) {
    case hour < 12:
      return 'Good Morning';
    case hour < 17:
     return 'Good Afternoon';
    case hour < 21:
      return 'Good Evening';
    default:
      return 'Good Night'; 
  }
};

const Message=({time,name})=>{
  return (
    <Container>{greeting(time)}, {name}. </Container>
  )
}
Message.PropTypes={
  name:PropTypes.string.isRequired,
};
export default toggleOnOff(Message);
