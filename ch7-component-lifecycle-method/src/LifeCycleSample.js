import {component} from 'react';
class LifeCycleSample extends Component {
	state = {
		number: 0,
		color:null,
	}
	myRef = null
	constructor(props){
		super(props);
		console.log('constructor');
	}
	
	componentDidMount(){
		console.log('componentDidMount')
	}
}