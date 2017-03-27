import React from 'react';
import renderer from 'react-test-renderer'
import Plot from './Plot';
import {fromJS} from 'immutable'

function createNodeMock(element){
  if(element.props.id === "plot"){
    return {
      on: () => {}
    }
  }
}
it('renders without crashing', () => {
  global.Plotly = {
    newPlot: () => {}
  }
  const options ={createNodeMock}
  const tree = renderer.create(<Plot xData={fromJS({})} yData={fromJS({})} />, options).toJSON()
  expect(tree).toMatchSnapshot()
});
