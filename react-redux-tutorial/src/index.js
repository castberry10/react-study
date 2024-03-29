import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import {composeWithDevTools } from 'redux-devtools-extension';// devtools

const store = createStore(rootReducer, composeWithDevTools()); // devtools

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);