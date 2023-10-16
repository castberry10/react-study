
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './modules';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
	<App/>
			</Provider>
	</BrowserRouter>,
);

