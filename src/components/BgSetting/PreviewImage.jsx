import React from 'react';
import styled from 'styled-components';

const PreviewImage=({img,click})=>{
  const url= img.thumb?img.thumb:img.src;
  const Img=styled.div`
    width:100px;
    height:75px;
    background-image:url(${url});
    background-size:cover;
    margin:5px 0 5px 0;
  `;
  return(
    <Img onClick={()=>click(img.src)}>
    </Img>
  )
}

export default PreviewImage;
