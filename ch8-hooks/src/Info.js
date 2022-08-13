import {useState, useEffect} from 'react';

const Info = () => {
	const [name, setName] = useState('')
	const [nickname, setNickname] = useState('')
	// useEffect(() => {
	// 	console.log('렌더링')
	// 	console.log({
	// 		name,
	// 		nickname
	// 	})
	// })
	// useEffect(() => {
	// 	console.log('마운트')
	// }, [])
	
	// useEffect(() => {
	// 	console.log('name이 변경때')
	// 	console.log(name)
	// }, [name])
	
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