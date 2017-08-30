import React from 'react';
import Slider from '../Settings/components/Slider';
import styled from 'styled-components';
const Cell=styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content: space-between;
  & :nth-child(odd){
    flex:3 1 inherited;
  }
  & :nth-child(even){
    flex:1 1 inherited;
  }
`;
const GeneralSetting=({apps,toggle})=>{
  return (
    <div>
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
    </div>
  )
}

export default GeneralSetting;
