import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu';
import NewQuote from './NewQuote';
import Quotes from './Quotes';

const Container = styled.div`
  height: 30px;
  width: 100%;
`;

const propTypes = {
  quoteFeeds: PropTypes.array.isRequired,
  onRemoveFeed: PropTypes.func.isRequired,
  onAddQuote: PropTypes.func.isRequired,
  // onRemoveQuote: PropTypes.func.isRequired,
  // onUpdateQuote: PropTypes.func.isRequired
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.currentFeed.feedName
    };
  }

  setList() {
    const feed = this.props.quoteFeeds.filter(feed => {
      return feed.feedName === this.state.activeTab;
    })[0];

    return feed ? feed : this.props.defaultList;
  }

  changeTab = (feedName) => {
    this.setState({ activeTab: feedName });
  }

  render() {
    const { 
      quoteFeeds, 
      onRemoveFeed,
      showNewQuote,
      onAddQuote,
      onRemoveQuote, 
      onUpdateQuote 
    } = this.props;

    const { activeTab } = this.state;
    
    return (
      <Container>
        <Menu
          activeTab={activeTab}
          onChangeTab={this.changeTab}
          quoteFeeds={quoteFeeds} 
          onRemoveFeed={onRemoveFeed}
        /> 
        {showNewQuote && 
          <NewQuote feedName={activeTab} onAddQuote={onAddQuote} />
        }
        <Quotes 
          feed={this.setList()} 
          onRemoveQuote={onRemoveQuote}
          onUpdateQuote={onUpdateQuote}  
        />  
      </Container>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;
