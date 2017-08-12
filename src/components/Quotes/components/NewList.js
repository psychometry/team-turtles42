import React, { Component } from 'react';
import '../Quotes.scss';

class NewList extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddList(this.listName.value);
    this.listName.value = '';
  }
  render() {
    return (
      <form
        className="new-list" 
        onSubmit={(event) => this.handleSubmit(event)} 
      >
        <input
          ref={(input) => this.listName = input}
          type="text"
          placeholder="New list"
        />
      </form>
    );
  }
};

export default NewList;
