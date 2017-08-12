import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { parseQuote } from '../../../utilities';
import ContentEditable from 'react-contenteditable';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      listName: '',
      quote: {}
    }
  }
  handleChange(event, listName, id) {
    const [ text, source ] = parseQuote(event.target.value);
    this.setState({ listName, quote: { id, text, source } });
  };
  handleBlur = () => {
    if (this.state.listName) {
      const { listName, quote } = this.state;
      this.props.onUpdateQuote(listName, quote);
    }
  }
  
  render() {
    const { quote, listName, onRemoveQuote } = this.props;
    const { id, text, source, liked } = quote;

    return (
      <li className="Quote">
        <ContentEditable
          className="edit-quote"
          ref={(input) => this.listName = input}
          html={`${text} \u2014 ${source}`} 
          disabled={false} 
          onBlur={this.handleBlur}
          onChange={(event) => this.handleChange(event, listName, id)} 
        />
        <Icon
          className="remove-quote"
          name="remove" 
          onClick={() => onRemoveQuote(listName, id)} 
        />
      </li>
    );
  }
}

export default Quote;
