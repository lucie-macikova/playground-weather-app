import React from 'react';
import renderer from 'react-test-renderer'
import {App} from './App';
import {fromJS} from 'immutable'

it('renders without crashing', () => {
  const tree = renderer.create(<App redux={fromJS({})} />).toJSON()
  expect(tree).toMatchSnapshot()
});
