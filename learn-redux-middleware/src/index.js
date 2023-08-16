import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer,{rootSaga} from './modules'
// import loggerMiddleware from './lib/loggerMiddleware'
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const root = ReactDOM.createRoot(document.getElementById('root'));
const logger = createLogger();
//composeWithDevTools를 redux middleware와 함께 사용한다면 applyMiddleware를 감싸면된다. 
const store = createStore(rootReducer, 
						  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);
root.render(
	<Provider store={store}>
	<App/>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
