import React from 'react';
import renderer from 'react-test-renderer';
import QuoteSettingsContainer from '../containers/QuoteSettingsContainer';

// console.log(localStorage.getItem);

xit('should QuoteSettingsContainer', () => {
  const tree = renderer.create(<QuoteSettingsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
