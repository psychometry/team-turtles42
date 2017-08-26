import React, { Component } from 'react';
import v4 from 'uuid/v4';
import { loadFromStorage, saveToStorage } from '../../../localStorage';
import { loadDefaultLists, loadDefaultList } from '../../../quotesHelpers';

import QuoteSettings from '../components/QuoteSettings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuoteFeedActionCreators from '../../../actions/QuoteFeedActionCreators.js';

// class QuotesContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       defaultList: loadFromStorage('defaultList') 
//         ? loadFromStorage('defaultList') 
//         : loadDefaultList(), 
//       // lists: loadFromStorage('lists')
//       //   ? loadFromStorage('lists')
//       //   : loadDefaultLists(),
//       showingNewQuote: false
//     };
//   }
  
//   // Quotes
//   toggleNewQuote = () => {
//     const { showingNewQuote } = this.state;
//     this.setState({ showingNewQuote: showingNewQuote ? false : true });
//   }

//   // Fold Quotes
//     // addQuote = (listName, text, source) => {
//     //   const { lists } = this.state;
//     //   const listIndex = lists.findIndex(list => list.name === listName);
//     //   const { quotes } = lists[listIndex];

//     //   this.setState({
//     //     lists: [
//     //       ...lists.slice(0, listIndex), 
//     //       ...lists.slice(listIndex + 1),
//     //       Object.assign({}, lists[listIndex], {
//     //         name: listName,
//     //         quotes: [
//     //           { id: v4(), text, source, liked: false }, // new quote
//     //           ...quotes,
//     //         ] 
//     //       })
//     //     ]
//     //   });
//     // }

//     // removeQuote = (listName, id) => {
//     //   const { lists } = this.state;
//     //   const listIndex = lists.findIndex(list => list.name === listName);
//     //   const { quotes } = lists[listIndex];
//     //   const quoteIndex = quotes.findIndex(quote => quote.id === id);
      
//     //   this.setState({ 
//     //     lists: [
//     //       ...lists.slice(0, listIndex),
//     //       Object.assign({}, lists[listIndex], {
//     //         name: listName,
//     //         quotes: [
//     //           ...quotes.slice(0, quoteIndex),
//     //           // removed quote
//     //           ...quotes.slice(quoteIndex + 1)
//     //         ]
//     //       }),
//     //       ...lists.slice(listIndex + 1)
//     //     ]
//     //   });
//     // }
    
//     // updateQuote = (listName, updatedQuote) => {
//     //   const { lists } = this.state;
//     //   const listIndex = lists.findIndex(list => list.name === listName);
//     //   const { quotes } = lists[listIndex];
//     //   const quoteIndex = quotes.findIndex(quote => quote.id === updatedQuote.id);

//     //   this.setState({ 
//     //     lists: [
//     //       ...lists.slice(0, listIndex), 
//     //       {
//     //         name: listName,
//     //         quotes: [
//     //           ...quotes.slice(0, quoteIndex), 
//     //           updatedQuote, 
//     //           ...quotes.slice(quoteIndex + 1)
//     //         ]
//     //       },
//     //       ...lists.slice(listIndex + 1)
//     //     ] 
//     //   });
//     // }
// }
const mapStateToProps = state => {
  return {
    quoteFeeds: state.quoteFeeds,
    currentFeed: state.currentFeed
  };
};

const mapDispatchToProps = dispatch => {
  return Object.assign(
    {},
    bindActionCreators(QuoteFeedActionCreators, dispatch)
  );
};
const QuoteSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteSettings);

export default QuoteSettingsContainer;
