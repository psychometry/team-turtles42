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
  // TODO: onUpdateList: Proptypes.func.isRequired,
  // onAddQuote: PropTypes.func.isRequired,
  // onRemoveQuote: PropTypes.func.isRequired,
  // onUpdateQuote: PropTypes.func.isRequired
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.currentFeed.name
    };
  }
  // setList() {
  //   const feed = this.props.quoteFeeds.filter(feed => {
  //     return feed.name === this.state.activeTab;
  //   })[0];

  //   return feed ? feed : this.props.defaultList;
  // }
  changeTab = (name) => {
    this.setState({ activeTab: name });
  }

  render() {
    const { 
      quoteFeeds, 
      onRemoveFeed,
      onChangeFeed, 
      showingNewQuote,
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
        {/* {showingNewQuote && 
          <NewQuote feedName={activeTab} onAddQuote={onAddQuote} />
        }
        <Quotes 
          feed={this.setList()} 
          onRemoveQuote={onRemoveQuote}
          onUpdateQuote={onUpdateQuote}  
        />   */}
      </Container>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;
