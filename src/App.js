import React, { Component } from 'react';

import styled from 'styled-components'
import Plot from './Plot'
import {connect} from 'react-redux'
import {setData, plotClick, fetchData} from './actions'

const TempWrapper = styled.p`
	  text-align: center;
	  position: relative;
`

const Temp = styled.span`
		font-size: 64px;
`

const TempSymbol = styled.span`
	  position: absolute;
	  top: 13px;
	  margin-left: 4px;
`

const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

const TempDate = styled.span`
  position: absolute;
  bottom: -1em;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(0, 0, 0, 0.5);
`

export class App extends Component {

	fetchData = (e) => {
		e.preventDefault()
		const token = 'd6fa85d74f3520862d3ab7a86cb17108'
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.location.value},CZ&APPID=${token}&units=metric`
		this.props.dispatch(fetchData(url))
	}
	onPlotClick = (data) => {
		this.props.dispatch(plotClick(data.points[0].x, data.points[0].y))
	}

  render() {
		let currentTemp = 'x'
	  if(this.props.redux.getIn(['data', 'list'])){
			currentTemp = this.props.redux.getIn(['data', 'list', 0, 'main', 'temp'])
	  }
	  console.log(this.props.temps)
    return (
      <div className="App">
        <h1>Pocasi</h1>
        <form onSubmit={this.fetchData}>
          <label>Chci pocasi</label>
          <input placeholder="city, country" ref={node => this.location = node} type="text"/>
	        {
		        this.props.redux.getIn(['data', 'list'])
		        ?
		        <Wrapper>
			        <TempWrapper>
				        <Temp>{this.props.redux.get('selected') ? this.props.redux.getIn(['selected', 'temp']) : currentTemp}</Temp>
				        <TempSymbol>°C</TempSymbol>
				        <TempDate>{this.props.redux.get('selected') ? this.props.redux.getIn(['selected', 'date']) : null}</TempDate>
			        </TempWrapper>
			        <h2>Predpoved</h2>
			        <Plot
				        xData={this.props.redux.get('dates')}
				        yData={this.props.redux.get('temps')}
				        onPlotClick={this.onPlotClick}
				        type="scatter"
			        />
		        </Wrapper>
		        : null
	        }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		redux: state
	}

}

export default connect(mapStateToProps)(App);
