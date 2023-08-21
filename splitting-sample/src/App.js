import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
// import notify from './notify's;
// const SplitMe = React.lazy(()=> import ('./SplitMe'))

class App extends Component {
	state = {
		SplitMe: null
	};
	
	handleClick = async () => {
		const loadedModule = await import('./SplitMe');
		this.setState({
			SplitMe: loadedModule.default
			
		});
	};
	
	render() {
		const {SplitMe} = this.state;
		return(
		<div className="App">
			<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p onClick={this.handleClick}>Hello react!</p>
			{SplitMe && <SplitMe/>}
			</header>
    	</div>
		)
  }
}

export default App;
