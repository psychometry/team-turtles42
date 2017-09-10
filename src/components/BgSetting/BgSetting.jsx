import React, {Component} from 'react';
import Slider from '../Settings/components/Slider';
import styled from 'styled-components';
import PreviewScreen from './PreviewScreen';
const Container=styled.div`
  height:100%;
  display:flex;
  flex-flow:column nowrap;
  justify-content:space between;
  > div{
    margin-bottom:20px;
  }
`;
const Cell=styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content: space-between;
  border-bottom:1px solid white;
  & :nth-child(odd){
    flex:3 1 inherited;
    text-transform:capitalize;
  }
  & :nth-child(even){
    flex:1 1 inherited;
  }
`;

class BgSetting extends Component{
  handleUnsplashToggle=()=>{
    if(this.props.background.option!=='unsplash'){
      this.props.setOption('unsplash');
    }else{
      this.props.setOption('local');
    }
  }
  render(){
    const {option, list}=this.props.background;
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
        <PreviewScreen imageList={list} click={this.props.setBackground}/>
      </Container>
    );
  }
}

export default BgSetting;
