import { connect } from 'react-redux';
import CurrentQuote from './CurrentQuote';
import { toggleFavorite } from '../../actions/QuotesActionCreators.js';
import { setCurrentQuote } from '../../actions/QuotesUiActionCreators.js';

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    quotesUi: state.quotesUi
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: (feedId, quoteId) => {
      dispatch(toggleFavorite(feedId, quoteId));
    },
    setCurrentQuote: quoteId => {
      dispatch(setCurrentQuote(quoteId));
    }
  };
};

const CurrentQuoteContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(CurrentQuote);

export default CurrentQuoteContainer;
