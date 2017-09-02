import React from 'react';
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
  quotes: PropTypes.object.isRequired,
  quotesUi: PropTypes.shape({
    activeTab: PropTypes.string,
    currentQuoteId: PropTypes.string,
    showNewQuote: PropTypes.bool
  }),
  onRemoveFeed: PropTypes.func.isRequired,
  onChangeFeed: PropTypes.func.isRequired,
  onChangeTab: PropTypes.func.isRequired,
  onAddQuote: PropTypes.func.isRequired,
  onRemoveQuote: PropTypes.func.isRequired,
  onUpdateQuote: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

const defaultProps = {
  onRemoveFeed: () => {},
  onChangeFeed: () => {},
  onChangeTab: () => {},
  onAddQuote: () => {},
  onRemoveQuote: () => {},
  onUpdateQuote: () => {},
  onToggleFavorite: () => {}
};

const Tabs = ({
  quotes,
  quotesUi,
  onRemoveFeed,
  onChangeTab,
  onAddQuote,
  onRemoveQuote, 
  onUpdateQuote,
  onToggleFavorite,
}) => {
  const { activeTab, showNewQuote } = quotesUi;
  // TODO: Create selector in quotes reducer
  const filterQuotes = () => {
    const { quotesById } = quotes;
    const filtered = Object.keys(quotesById).filter(quoteId => {
      const quote = quotesById[quoteId];
      return quote.feedId === activeTab;
    });
    return filtered.map(quoteId => {
      const quote = quotesById[quoteId];
      quote.quoteId = quoteId;
      return quote;
    });
  };

  return (
    <Container>
      <Menu
        quotes={quotes} 
        activeTab={activeTab}
        onRemoveFeed={onRemoveFeed}
        onChangeTab={onChangeTab}
      /> 
      {showNewQuote &&
        <NewQuote activeTab={activeTab} onAddQuote={onAddQuote} />
      }
      <Quotes 
        filteredQuotes={filterQuotes()} 
        activeTab={activeTab}
        onRemoveQuote={onRemoveQuote}
        onUpdateQuote={onUpdateQuote}  
        onToggleFavorite={onToggleFavorite}
      />  
    </Container>
  );
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
