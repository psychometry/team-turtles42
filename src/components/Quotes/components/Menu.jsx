import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 460px;
  height: 40px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,.3);
    background-clip: adding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${({ active }) => active ? '#fff' : 'silver'};
  margin-right: 20px;
  i {
    color: white;
    display: block;
    margin-left: 10px;
    visibility: hidden;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:hover i {
    visibility: visible;
  }
`;

const Menu = ({ lists, activeTab, onChangeList, onAddList, onRemoveList }) => {
  // Prevent lists from reordering after adding a quote
  // Find a better solution
  lists = lists.sort((a, b) => {
    return a.name > b.name;
  });

  const handleClick = (event, name) => {
    event.preventDefault();
    onChangeList(name);
  }
  const handleRemoveClick = (event, name) => {
    event.preventDefault();
    onRemoveList(name);
  }

  const menuItems = lists.map(list => {
    const active = activeTab === list.name ? true : false;
    const { name } = list;

    return (
      <Link
        active={active}
        key={name}
        onClick={(event) => handleClick(event, name)}
      >
        {name}
        <i 
          className={lists.length === 1 ? '' : 'remove icon'}
          onClick={(event) => handleRemoveClick(event, name)} 
        />
      </Link>
    );
  });

  return (
    <Div>
      {menuItems}
    </Div>
  );
};

Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChangeList: PropTypes.func.isRequired,
}

export default Menu;
