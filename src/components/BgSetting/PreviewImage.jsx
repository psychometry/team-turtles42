import React, {Component} from 'react';
import styled from 'styled-components';
const Preview=styled.div`
  width:150px;
  height:100px;
  background-image:${props=>props.url};
  background-size:cover;
  margin:5px 0 5px 0;
  border:${props=>props.active?'2px solid green':0};
`;
const SetButton=styled.button`
  background:transparent;
  border:0;
  text-shadow: 0 0 5px black;
  color:white;
`
class PreviewImage extends Component{
  handleSelectInfo=(e)=>{
    this.props.showImageInfo();
    this.props.setImage(this.props.img);
    e.stopPropagation();
  }
  handleSelectBackground=(e)=>{
    this.props.click(this.props.img.src);
    e.stopPropagation();
  }
  render(){
    const {active, img} = this.props;
    const url= img.thumb?img.thumb:img.src;
    return(
      <Preview active={img.src===active} url={`url(${url})`} onClick={this.handleSelectInfo}>
        <SetButton onClick={this.handleSelectBackground} title='Set as background.'>&#x2714;</SetButton>
      </Preview>
    )
  }
}

export default PreviewImage;
