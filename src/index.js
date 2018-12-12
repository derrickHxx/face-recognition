import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import {fetchImage,getInput,getCoor} from './components/imageLinkForm/reducer.js';
// import {moduleA} from './components/imageLinkForm/reducer.js';
// import { namedReducerEnhancer } from "redux-named-reducers";


const logger = createLogger();
// const rootReducer = combineReducers({fetchImage,getInput,getCoor});
const store = createStore(applyMiddleware(thunkMiddleware,logger));
// const store = createStore(moduleA,compose(namedReducerEnhancer()),applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
