import React from 'react';
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
  .remove {
    margin-left: 5px;
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
  quotes, 
  activeTab, 
  onChangeTab, 
  onRemoveFeed,
}) => {
  const { feedsById } = quotes;

  const menuItems = Object.keys(feedsById).map(feedId => {
    const feed = feedsById[feedId];
    const { feedName } = feed;
    const active = activeTab === feedId ? true : false;

    return (
      <Link
        active={active}
        key={feedId}
        onClick={() => onChangeTab(feedId, feedName)}
      >
        {feedName}
        <i 
          className={feedName === 'Default' ? '' : 'remove icon'}
          onClick={(event) => {
            event.stopPropagation();
            onRemoveFeed(feedId);
          }}
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

export default Menu;
