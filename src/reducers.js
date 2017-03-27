import {fromJS} from 'immutable'

const initialState = fromJS({
	data: {},
})

export default function mainReducer(state= initialState, action) {
	switch (action.type) {
		case 'SET_DATA':
			return state.set('data', fromJS(action.data))
									.set('temps', fromJS(action.temps))
									.set('dates', fromJS(action.dates))
									.set('selected', null)

		case 'PLOT_CLICK':
			return state.set('selected', fromJS({
				date: action.date,
				temp: action.temp,
			}))
		default:
			return state;

	}
}