import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './Quotes.scss';

class NewList extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddList(this.listName.value);
    this.listName.value = '';
  }
  render() {
    return (
      <Form 
        onSubmit={(event) => this.handleSubmit(event)} 
        style={{ width: "100px" }} inverted size="small"
      >
        <input
          ref={(input) => this.listName = input}
          type="text"
          placeholder="New list"
        />
        {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
      </Form>
    );
  }
};

export default NewList;
