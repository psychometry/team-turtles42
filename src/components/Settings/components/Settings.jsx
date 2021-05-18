import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Tabs from '../components/Tabs';

const Div = styled.div`
  background-color: ${({ theme }) => theme.black};
  z-index: 100;
  height: 500px;
  width: 700px;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 40px;
`;

const Pointer = styled.i`
  position: relative;
  bottom: -30px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${({ theme }) => theme.black};
`;

const Settings = ({ 
  showing, 
  tabs, 
  activeTab, 
  onChangeTab, 
  onToggleSettings 
}) => {
  const wrapperRef = useRef(null);
  useEffect(
    ()=>{
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  );
  const handleClickOutside=(e)=>{
    if(wrapperRef.current&&!wrapperRef.current.contains(e.target)){
      if(e.target.className&&!e.target.className.includes('ignore-react-onclickoutside')){
        onToggleSettings();
      }
      
    }
  }
  return (
    <Div ref={wrapperRef}>
      <Tabs activeTab={activeTab} onChangeTab={onChangeTab}>
        {tabs}
      </Tabs>
      <Pointer/>
    </Div>
  );
};

export default Settings;