import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 30px;
  font-size: 1em;
  text-shadow: 0 1px 5px ${({ theme }) => theme.black};

`;

const Bookmarks = () => {
  return (
    <Container>
      Links
    </Container>
  );
};

export default Bookmarks;
