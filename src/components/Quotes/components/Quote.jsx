import React, { Component } from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import PropTypes from 'prop-types';
import { parseQuote } from '../../../quotesHelpers';

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .edit-quote {
    border-bottom: 1px solid silver;
    width: 100%;
    margin-right: 20px;
    padding: 20px 0;
    color: white;
    &:focus {
      border-bottom: 1px solid white;
      outline: none;
    }
  }
  .remove, .heart {
    cursor: pointer;
  }
  .remove {
    margin-left: 5px;
    visibility: hidden;
  }
  &:hover .remove {
    visibility: visible;
  }
`;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedName: '',
      quote: {}
    }
  }

  handleUpdateQuote(event, feedName, id) {
    const [ text, source ] = parseQuote(event.target.value);
    this.setState({ feedName, quote: { id, text, source } });
  };

  handleBlur = () => {
    if (this.state.feedName) {
      const { feedName, quote } = this.state;
      this.props.onUpdateQuote(feedName, quote);
    }
  }
  
  render() {
    const { quote, feedName, onRemoveQuote, onToggleLike } = this.props;
    const { id, text, source, liked } = quote;

    let heart = 'empty heart icon';
    if (liked) heart = 'heart icon';

    return (
      <Li>
        <ContentEditable
          className="edit-quote"
          html={`${text} \u2014 ${source}`} 
          disabled={false} 
          onBlur={this.handleBlur}
          onChange={(event) => this.handleUpdateQuote(event, feedName, id)} 
        />
        <i className={heart} onClick={() => onToggleLike(feedName, id)} />
        <i className="remove icon" onClick={() => onRemoveQuote(feedName, id)} />
      </Li>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  feedName: PropTypes.string.isRequired,
  onRemoveQuote: PropTypes.func.isRequired
}

export default Quote;
