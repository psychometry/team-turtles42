import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

const Quote = ({ quote, i }) => {
  const [ text, source, liked ] = quote;
  return (
    <li key={i}>
      <Icon style={{ position: 'relative', left: '400px' }}name="remove"/>
      <Form 
        onSubmit={(event) => this.handleSubmit(event)} 
        inverted 
        size="small"
      >
        <input
          ref={(input) => this.listName = input}
          type="text"
          defaultValue={`"${text}" ${source}`}
          placeholder='"Quote text." Quote source'
        />
        {/* <Form.Input ref={(input) => this.input = input} placeholder="New list"/> */}
      </Form>
    </li>
  );
};

export default Quote;
