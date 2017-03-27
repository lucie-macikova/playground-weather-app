/* global Plotly */
import React, { Component } from 'react';

export default class Plot extends Component {
	drawPlot(){
		Plotly.newPlot('plot', [{
			x: this.props.xData.toJS(),
			y: this.props.yData.toJS(),
			type: this.props.type
		}])
		this.plot.on('plotly_click', this.props.onPlotClick)

	}
	componentDidMount(){
		this.drawPlot()
	}
	componentDidUpdate(){
		this.drawPlot()
	}
	shouldComponentUpdate (nextProps){
		const xDataChanged = !this.props.xData.equals(nextProps.xData)
		const yDataChanged = !this.props.yData.equals(nextProps.yData)

		return xDataChanged || yDataChanged
	}

	render(){
		console.log('rendering')
		return <div id="plot" ref={node => this.plot = node} ></div>
	}
}
