import React from 'react';
import renderer from 'react-test-renderer';
import QuotesContainer from '../containers/QuotesContainer';

// console.log(localStorage.getItem);

it('should render CurrentQuote', () => {
  const tree = renderer.create(<QuotesContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
