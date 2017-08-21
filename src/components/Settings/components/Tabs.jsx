import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  `;
  const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  `;
  const Pane = styled.div`
  height: 460px;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,.3);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }
`;
const Link = styled.a`
  color: ${({ active }) => active ? '#fff' : 'rgba(255,255,255,.5)'};
  &:hover {
    color: silver;
    cursor: pointer;
  }
  font-size: 1.25em;
  margin-bottom: 20px;
`;

const propTypes = {
  children: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onChangeTab: PropTypes.func.isRequired
};

const Tabs = ({ children: tabs, activeTab: index, onChangeTab }) => {
  
  const handleClick = (event, index) => {
    event.preventDefault();
    onChangeTab(index);
  };
  const renderMenu = (tabs) => {
    return tabs.map((tab, i) => {
      const active = i === index ? true : false;
      return (
        <Link 
          active={active}
          key={tab.name} 
          onClick={event => handleClick(event, i)}
        >
          {tab.name}
        </Link>
      );
    });
  };
  
  const renderPane = ({ name, content }) => <Pane key={name}>{content}</Pane>;

  return (
    <Container>
      <Menu>{renderMenu(tabs)}</Menu>
      <Pane>{renderPane(tabs[index])}</Pane>
    </Container>
  );
}

Tabs.propTypes = propTypes;

export default Tabs;
