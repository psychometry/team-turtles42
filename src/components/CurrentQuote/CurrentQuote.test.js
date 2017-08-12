import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CurrentQuote from './CurrentQuote';

it('should render CurrentQuote', () => {
  const tree = renderer.create(<CurrentQuote />).toJSON();
  expect(tree).toMatchSnapshot();
});
