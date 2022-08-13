import {useReducer} from 'react';
function reducer(state, action){
	return{
		...state,
		[action.name]: action.value
	};
}
const InfoReducer = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname:''
	});
	const {name, nickname} = state
	
	const onChange = e => {
		dispatch(e.target)
	}
	// 아래 onChange 호출 -> onChange안에 dispatch호출 이때 e.target [<input>] 을 보냄
	//dispatch는 useReducer 에 명시된 state를 바꾸는 함수 -> reducer에 action이 e.target으로 들어감
	//reducer에선 새로운 상태를 반환해야함(불변성을 지키며) > ...state로 복사후 [action.name]: action.value -> [e.target.name]: e.target.value 수정
	return(
		<div>
			<div>
				<input name="name" value={name} onChange = {onChange} /> 
				<input name="nickname"value={nickname} onChange = {onChange} />
				
			</div>
			<div>
				<div>
					<b>이름: </b> {name}
				</div>
				
				<div>
					<b>닉네임: </b> {nickname}
				</div>
			</div>
		</div>
	)
}

export default InfoReducer;