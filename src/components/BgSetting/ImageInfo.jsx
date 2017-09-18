import React from 'react';
import styled from 'styled-components';
const Figure=styled.figure`
  width:100%-100px;
  margin-left:0;
  > h3{
    text-align:center;
  }
  > a img{
    width:100%
  }
  > figcaption{
    display:flex;
    >span{
      flex:1;
      &:nth-child(1){
        text-align:left;
      }
      &:nth-last-child(1){
        text-align:right;
      }
      >button{
        background:transparent;
        border:0;
        color:white;
        opacity:0.7;
        &:hover{
          opacity:1;
          cursor:pointer;
        }
        &:focus{
          outline:none;
        }
      }
    }
  }
`;
const ImageInfo=({img, active, setBackground})=>{
  const activeBackground= img.src===active?
    "Current background":
  <button onClick={()=>setBackground(img.src)}>Set as active background</button>;
  return(
      <Figure>
        <h3>Background Info</h3>
        <a href={img.url}><img src={img.src} alt=''/></a>
        <figcaption>
          <span>Photo by <a href={img.user.link}>{img.user.name}</a></span>
          <span>
          {
            activeBackground
          }
          </span>
        </figcaption>
      </Figure>
  )
}

export default ImageInfo;
