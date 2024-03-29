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
				<ScrollBox ref = {(ref) => this.scrollBox = ref}/>
				<button onClick = {() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div>
		)
	}
}

export default App;