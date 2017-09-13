import React from 'react';
import styled from 'styled-components';

const Figure=styled.figure`
  width:100%-100px;
  margin-left:0;
  > img{
    width:100%
  }
`;
const ImageInfo=({img})=>{
  return(
      <Figure>
        <img src={img.src} alt=''/>
        <figcaption>
          Photo by <a href={img.user.link}>{img.user.name}</a>
        </figcaption>
      </Figure>
  )
}

export default ImageInfo;
