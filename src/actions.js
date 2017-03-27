import xhr from 'xhr'

export function setData(data, dates, temps)  {
	return{
		type: 'SET_DATA',
		data,
		dates,
		temps
	}
}

export function plotClick(date, temp)  {
	return{
		type: 'PLOT_CLICK',
		date,
		temp
	}
}

export function fetchData(url)  {
	return function thunk(dispatch) {
		xhr({
			url: url
		}, (error, data) => {
			const body = JSON.parse(data.body)
			const list = body.list
			const dates = []
			const temps = []
			for (var i = 0; i < list.length; i++){
				dates.push(list[i].dt_txt);
				temps.push(list[i].main.temp);
			}
			dispatch(setData(body, dates, temps))
		})
	}
}