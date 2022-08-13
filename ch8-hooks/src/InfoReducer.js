import {useReducer} from 'react';
function reducer(state, action){
	return{
		...state,
		[action.name]: action.value
	}
}
const Info = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname:''
	});
	const {name, nickname} = state
	useEffect(() => {
		console.log('이펙트 effect')
		return () => {
			console.log('클린업 cleanup')
			console.log(name + ' + cleanup ')
		}
	}, [name])
	const onChangeName = e => {
		setName(e.target.value);
	}
	const onChangeNickname = e => {
		setNickname(e.target.value);
	}
	return(
		<div>
			<div>
				<input value={name} onChange = {onChangeName} />
				<input value={nickname} onChange = {onChangeNickname} />
				
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

export default Info;