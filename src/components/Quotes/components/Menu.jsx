import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 460px;
  height: 40px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.grey};
    background-clip: adding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.white};
  opacity: ${({ active }) => active ? '1' : '.75'};
  margin-right: 20px;
  i {
    color: ${({ theme }) => theme.white};
    display: block;
    margin-left: 10px;
    visibility: hidden;
  }
  &:hover {
    color: ${({ theme }) => theme.white};
    opacity: 1;
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
  onRemoveFeed,
  onChangeFeed
}) => {
  const handleChangeTab = (event, name) => {
    event.preventDefault();
    onChangeTab(name);
  };
  const handleRemoveFeed = (event, name) => {
    event.preventDefault();
    onRemoveFeed(name);
    onChangeFeed('Default');
  };

  const menuItems = quoteFeeds.map(feed => {
    const { feedName } = feed;
    const active = activeTab === feedName ? true : false;

    return (
      <Link
        active={active}
        key={feedName}
        onClick={(event) => handleChangeTab(event, feedName)}
      >
        {feedName}
        <i 
          className={feed.feedName === 'Default' ? '' : 'remove icon'}
          onClick={(event) => handleRemoveFeed(event, feedName)} 
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
