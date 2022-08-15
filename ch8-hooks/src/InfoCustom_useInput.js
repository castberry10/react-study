//InfoCustomHooks_useInput InfoCustom_useInput.js InfoCustom_useInput

import useInput from './useinputs';

const InfoCustom_useInput = () => {
	const [state, onChange] = useInput({
		name:'',
		nickname:''
	});
	const{name, nickname} = state;
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

export default InfoCustom_useInput;