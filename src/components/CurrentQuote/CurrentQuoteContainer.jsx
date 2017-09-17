import { connect } from 'react-redux';
import CurrentQuote from './CurrentQuote';
import { toggleFavorite, setCurrentQuote } from '../../actions/QuotesActionCreators.js';
import toggleOnOff from '../../HOC';

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
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

export default toggleOnOff(CurrentQuoteContainer);
