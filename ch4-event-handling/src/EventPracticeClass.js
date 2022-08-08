import {Component} from 'react';
class EventPracticeClass extends Component{
	state = {
		message: ''
	}
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	// -------------------------///////////
	handleChange2(e){
		this.setState({
			message: e.target.value
		});
	}
	handleClick2(e){
		alert(this.state.message);
		this.setState({
			message: ''
		});
	}
	//위처럼 해도 되지만 
	//바벨의 transform-class-properties 문법을 이용하여 메서드를 작성하면
	//깔끔해진다 [Property Initalizer Syntax]
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: '' || e.target.value
			
		});
	}
	handleClick = (e) => {
		
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			message: '',
			username: ''
		});
	}
	//위 handleChange의 문법의 부가 설명
	// const name = 'variantKey';
	// const object = {
	// 	[name] : 'value'
	// };
	// 는 다음과 같다. 
	// {
	// 	'variantKey' : 'value'
	// }
	// > 객체안에서 key를 []로 감싸면 그안에 넣은 레퍼런스가 가르키는 값이 key로 사용된다. 


	handleKeyPress = (e) => {
		if(e.key === 'Enter'){
			this.handleClick();
		}
	}
	render(){
		return(
			<div>
				<h1>이벤트 연습</h1>
				<input
					type = "text"
					name = "username"
					placeholder="사용자명"
					value = {this.state.username}
					onChange = {this.handleChange}
					/>
				<input
					type = "text"
					name = "message"
					placeholder = "아무거나 입력 ㄱㄱ"
					value = {this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick = {this.handleClick}>확인</button>
					
			</div>
		);
	}
}
export default EventPracticeClass;