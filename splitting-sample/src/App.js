import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {useState, Suspense} from 'react';
import React from 'react';
import loadable from '@loadable/component';

const SplitMe = loadable(()=> import ('./SplitMe'));

function App(){
	
	const [visible, setVisible] = useState(false);
	const onClick = () => {
		setVisible(true);
	};
	
	return(
		<div className="App">
			<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p onClick={onClick}>Hello react!</p>
			{visible && <SplitMe/>}
			</header>
    	</div>
	);
  
}

export default App;
