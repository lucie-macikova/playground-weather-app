import mainReducer from './reducers'
import {fromJS} from 'immutable'

describe('action', function(){
	it('should set data', function(){
		var data = 'xxx'
		expect(mainReducer(undefined, {
			type: 'SET_DATA', data
		})).toEqual(fromJS({
			data,
			temps: undefined,
			dates: undefined,
			selected: null,
			}))
	})
})