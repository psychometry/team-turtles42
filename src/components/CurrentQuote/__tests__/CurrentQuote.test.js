import React from 'react';
import renderer from 'react-test-renderer';
import CurrentQuote from '../CurrentQuote';

xit('should render CurrentQuote', () => {
  const tree = renderer.create(<CurrentQuote />).toJSON();
  expect(tree).toMatchSnapshot();
});
