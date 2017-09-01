import React, { Component } from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import PropTypes from 'prop-types';
import { parseQuote } from '../../../quoteHelpers';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .edit-quote {
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    width: 100%;
    margin-right: 20px;
    padding: 20px 0;
    color: white;
    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.white};
      outline: none;
    }
  }
  .remove, .heart {
    opacity: .75;
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

const propTypes = {
  quote: PropTypes.object.isRequired,
  feedName: PropTypes.string.isRequired,
  onRemoveQuote: PropTypes.func.isRequired
};

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
      <ListItem>
        <ContentEditable
          className="edit-quote"
          html={`${text} \u2014 ${source}`} 
          disabled={false} 
          onBlur={this.handleBlur}
          onChange={(event) => this.handleUpdateQuote(event, feedName, id)} 
        />
        <i className={heart} onClick={() => onToggleLike(feedName, id)} />
        <i className="remove icon" onClick={() => onRemoveQuote(feedName, id)} />
      </ListItem>
    );
  }
}

Quote.propTypes = propTypes;

export default Quote;
