import React, {Component} from 'react';
import Slider from '../Settings/components/Slider';
import styled from 'styled-components';
import PreviewScreen from './PreviewScreen';
import ImageInfo from './ImageInfo';
const Container=styled.div`
  width:100%;
  >div{
    margin-bottom:20px;
  }
`;
const Cell=styled.div`
  width:100%;
  display:flex;
  flex-flow:row nowrap;
  border-bottom:1px solid white;
  & :nth-child(odd){
    flex:5;
    text-transform:capitalize;
  }
`;
const CloseButton=styled.div`
  width:40px;
  height:100px;
  border:0;
  margin-top:14px;
  background:transparent;
  font-size:x-large;
  color:white;
`;
const ImageTab=styled.div`
  display:flex;
  flex-flow:row nowrap;
  > figure{
    flex:3
  }
`;
class BgSetting extends Component{
  componentWillUnmount(){
    this.props.closeImageInfo();
  }
  componentDidUpdate(prevProp){
    if(prevProp.background.option!==this.props.background.option){
      this.props.closeImageInfo();
    }
  }
  handleUnsplashToggle=()=>{
    if(this.props.background.option!=='unsplash'){
      this.props.setOption('unsplash');
    }else{
      this.props.setOption('local');
    }
  }
  render(){
    const {option, list, bg}=this.props.background;
    const {image,displayInfo}=this.props.imageInfo;
    const renderInfo=displayInfo?(
      <ImageTab>
        <CloseButton onClick={()=>this.props.closeImageInfo()}>{"<"}</CloseButton>
        <ImageInfo img={image}/>
      </ImageTab>
    ):null;

    return(
      <Container>
        <div>Background:</div>
        <Cell>
          <div>Unsplash backgrounds</div>
          <div>
            <Slider
              checked={option==='unsplash'}
              toggle={this.handleUnsplashToggle}
              id={null}
            />
          </div>
        </Cell>
        <PreviewScreen
          active={bg}
          imageList={list}
          click={this.props.setBackground}
          showImageInfo={this.props.showImageInfo}
          setImage={this.props.setImage}
        />
        {
          renderInfo
        }

      </Container>
    );
  }
}

export default BgSetting;
