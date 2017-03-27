import {
	setData
} from './actions'

describe('action', function(){
	it('should have a type of "SET_DATA', function(){
		expect(setData().type).toEqual('SET_DATA')
	})
})