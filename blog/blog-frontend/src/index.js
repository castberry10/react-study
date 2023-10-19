
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
// import {configureStore} from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)), sagaMiddleware.run(rootSaga));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
	<App/>
			</Provider>
	</BrowserRouter>,
);

