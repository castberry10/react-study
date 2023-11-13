
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
import {tempSetUser, check} from './modules/user';



function loadUser(){
	try{
		const user = localStorage.getItem('user');
		if (!user){
			return; //로그인 상태가 아니면 아무것도 안함
		}
		
		store.dispatch(tempSetUser(JSON.parse(user)));
		store.dispatch(check());
	}catch(e){
		console.log('localStorage is not working');
	}
}


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
loadUser();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
	<App/>
			</Provider>
	</BrowserRouter>,
);

