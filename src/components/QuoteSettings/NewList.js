import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './QuoteSettings.scss';

class NewList extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddList(this.listName.value);
    this.listName.value = '';
  }
  render() {
    return (
      <div className="new-list" style={{ display: 'flex', alignItems: 'center' }}>
        <Form 
          onSubmit={(event) => this.handleSubmit(event)} 
          inverted size="small"
        >
          <input
            ref={(input) => this.listName = input}
            type="text"
            placeholder="New list"
          />
          {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
        </Form>
      </div>
    );
  }
};

export default NewList;
