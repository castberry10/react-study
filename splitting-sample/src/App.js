import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {useState, Suspense} from 'react';
import React from 'react';
import loadable from '@loadable/component';

const SplitMe = loadable(()=> import ('./SplitMe'), {
	fallback: <div>loading...</div>
});

function App(){
	
	const [visible, setVisible] = useState(false);
	const onClick = () => {
		setVisible(true);
	};
	
	const onMouseOver = () => {
		SplitMe.preload(); // 마우스커서만 올려도 로딩 시작 -> 더 좋은 유저 사용 경험
	};
	
	return(
		<div className="App">
			<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p onClick={onClick} onMouseOver={onMouseOver}>Hello react!</p>
			{visible && <SplitMe/>}
			</header>
    	</div>
	);
  
}

export default App;
