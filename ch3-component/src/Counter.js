import { Component } from 'react';

class Counter extends Component{
	state = {
		number : 0,
		fixedNumber: 0
	}
	render(){
	const {number, fixedNumber} = this.state; // state 조회는 this.state
		return(
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 ㅣ {fixedNumber}</h2>
				<button 
					onClick = {() => {
						this.setState({number : number + 1});
						this.setState({number : number + 1});
						this.setState({number : this.state.number + 1});
					}} // 이렇게 써도 1밖에 안올라감 
				> 비동기를 통한 숫자 증가 
				</button>
				<div 
					//this.setState(prevStatem, props) => {
					//	retrun{
					//		//update
					//	}
					//}
					// 이런 느낌으로 객체 대신 함수를 사용하면 문제해결
					//prevState는 기존상태 props는 현재 지니는 props이다.  
				>
					</div>
				<button 
					onClick = {() => {
						this.setState(prevState => {
							return{
								number : prevState.number + 1
							};
						});
						
						this.setState(prevState => ({
							number:prevState.number+1
						}));
						
					}} 
				> 함수를 통한 숫자 증가 
					
				</button>
				<br/>
				<button 
					onClick = {() => {
						this.setState(
							{
								number : number + 1
							},
							()=>{
								console.log('방금 setState가 호출되었습니다.');
								console.log(this.state);
							}
						)
					
					}} 
				> +1 > console log
					
				</button>
			</div>
		)
	
	}
}
class Counter2 extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			number: 0,
			fixedNumber: 0
		};
	}
	render(){
	const {number, fixedNumber} = this.state; // state 조회는 this.state
		return(
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 ㅣ {fixedNumber}</h2>
				<button 
					onClick = {() => {
						this.setState({number : number + 1});
					}}
					
					
				> +1
				</button>
			</div>
		)
	
	}
}

export default Counter;