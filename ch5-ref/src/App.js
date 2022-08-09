import {Component} from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox'

class App extends Component{
	render(){
		return(
			<div>
				<ValidationSample/>
				<br/>
				---------------------------------
				<br/>
				<ScrollBox/>
			</div>
		)
	}
}

export default App;