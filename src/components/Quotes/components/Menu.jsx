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

const Menu = ({ 
  quoteFeeds, 
  activeTab, 
  onChangeTab, 
  onRemoveFeed 
}) => {
  const handleChangeTab = (event, name) => {
    event.preventDefault();
    onChangeTab(name);
  }
  const handleRemoveFeed = (event, name) => {
    event.preventDefault();
    onRemoveFeed(name);
    // TODO: Change current feed to next feed or Default if removing it
  }

  const menuItems = quoteFeeds.map(feed => {
    const active = activeTab === feed.name ? true : false;
    const { name } = feed;

    return (
      <Link
        active={active}
        key={name}
        onClick={(event) => handleChangeTab(event, name)}
      >
        {name}
        <i 
          className={feed.name === 'Default' ? '' : 'remove icon'}
          onClick={(event) => handleRemoveFeed(event, name)} 
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
  quoteFeeds: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onRemoveFeed: PropTypes.func.isRequired
}

export default Menu;
