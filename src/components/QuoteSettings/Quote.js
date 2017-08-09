import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const Quote = ({ quote }) => {
  const [ text, source, liked ] = quote;
  const handleChange = () => {
  };
  return (
    <li>
      <Form className="quote-form"
        onSubmit={(event) => this.handleSubmit(event)} 
        inverted 
        size="small"
      >
        <input
          ref={(input) => this.listName = input}
          type="text"
          onChange={handleChange}
          defaultValue={`"${text}" ${source}`}
          placeholder="Quote &mdash; Source"
        />
        <Icon name="remove"/>
        {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
      </Form>
    </li>
  );
};

export default Quote;
