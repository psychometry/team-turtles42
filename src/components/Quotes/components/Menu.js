import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Menu = ({ lists, active, onChangeList, onAddList, onRemoveList }) => {
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
    const activeClassName = active === list.name ? 'active item' : 'item';
    const { name } = list;
    return (
      <a
        key={name}
        className={activeClassName}
        onClick={(event) => handleClick(event, name)}
      >
        {name}
        <Icon 
          className="remove-list" 
          name="remove" 
          onClick={(event) => handleRemoveClick(event, name)} 
        />
      </a>
    );
  });

  return (
    <div className="tab-menu">
      {menuItems}
    </div>
  );
};

Menu.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeList: PropTypes.func.isRequired,
}

export default Menu;
