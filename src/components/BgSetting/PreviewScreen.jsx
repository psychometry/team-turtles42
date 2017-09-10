import React from 'react';
import styled from 'styled-components';
import PreviewImage from './PreviewImage';
const Container= styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  width:100%;
`;
const PreviewScreen=({imageList,click})=>{
  return(
    <div>
      <span>Today's Backgrounds</span>
      <Container>
        {
          imageList.map((img,i)=>{
            return <PreviewImage img={img} key={i} click={click}/>
          })
        }
      </Container>
    </div>
  )
}

export default PreviewScreen;
