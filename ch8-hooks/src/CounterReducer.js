import {useReducer} from 'react';
function reducer(state, action){
	switch(action.type){
		case 'INCREMENT':
			return{value: state.value + 1};
		case 'DECREMENT':
			return{value: state.value - 1};
		default:
			return state;
	}
}
const CounterReducer = () => {
	const [state, dispatch] = useReducer(reducer, {value: 0});
	//아래에서 onClick발생시 dispatch(객체1)실행
	//>dispatch는 state를 바꾸는 함수. > reducer로 넘어감
	//> reducer에 action이 객체1로 치환됨> 객체1.type 조회하여 밸류 바꿈 
	return(
	<div>
		<p>
		현재 카운터 값은 <b>{state.value}</b>
			
		</p>
		<button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
			
		<button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
	</div>
	)
}

export default CounterReducer