import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {injectGlobal} from 'styled-components';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

injectGlobal`

body {
	font-family: Helvetica, Arial, sans-serif;
	font-size: 16px;
	color: #333;
	background: #eee;
}

h1 {
	text-align: center;
}

form {
	text-align: center;
}

input {
	border: none;
	background: inherit;
	border-bottom: 1px dashed black;
	margin-left: 0.5em;
	font-size: 1em;
	outline: none;
}
`

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
	<Provider store={store}>
   <App />
	</Provider>,
  document.getElementById('root')
);
