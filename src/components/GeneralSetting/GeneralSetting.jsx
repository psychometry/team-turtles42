import React from 'react';
import Slider from '../Settings/components/Slider';
import styled from 'styled-components';
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
  align-items: flex-end;
  padding-bottom: 5px;
  border-bottom:1px solid white;
  & :nth-child(odd){
    flex:3 1 inherited;
    text-transform:capitalize;
  }
  & :nth-child(even){
    flex:1 1 inherited;
  }
`;
const GeneralSetting=({apps,toggle})=>{
  return (
    <Container>
      <div>Show:</div>
      {
        Object.keys(apps).map(
          (app, i)=>{
            return (
              <Cell key={i}>
                <div>{app}</div>
                <div>
                  <Slider
                    id={app}
                    checked={apps[app]}
                    toggle={toggle}
                  />
                </div>
              </Cell>
            )
          }
        )
      }
    </Container>
  )
}

export default GeneralSetting;
