import {useState} from 'react'
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Info from './Info'
const App = () => {
	const [visible, setVisible] = useState(false);
	return (
    	<div className="App">
    		<Counter/>  
			<br/>
				
			<br/>
			<button
				onClick = {() => {
					setVisible(!visible);
				}}
			>{visible ? '숨기기' : '보이기'}</button>
			<hr/>
			{visible&&<Info/>}
			<hr/>
			CounterReducer.js
			<hr/>
			<CounterReducer/>
    	</div>
  	);
}

export default App;
