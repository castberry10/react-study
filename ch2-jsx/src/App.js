import './App.css'
import {Fragment} from 'react'
function App() {
	const name ='리액트';
	const nullvalue = undefined;
	const style = {// 그그 카멜표기법처럼 - 지우고 그 뒤 첫글자 대문자
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding:16
	};
	return (
		<div>
			<div>
				HELLO <b>{name}</b>
			</div>
			<div>
				{name === '리액트' ? (
					<h1>리액트입니다.</h1>
				) : (
					<h2>리액트가 아닙니다.</h2>
				)}
				{name === '리액트' && <h2> 리액트입니다 22</h2> /* 조건부 랜더링 */}
				{name === '리액트2' && <h2> 리액트2입니다 22</h2>}
				
				{nullvalue || 'undefined한 값은 ||를 이용하여 일캐 출력'}
				
			</div>
			<div style ={style}>{name}</div> {/* ㅜ위 에서 변수로 css 받기 */}
			<div>----------------------------------------------------</div>
			<div style ={{backgroundColor: 'black'}}>{name}</div>
			<div>----------------------------------------------------</div>
			<div className = "react">{name}</div> {/*css는 css처럼쓰고 className으로 css 받기 */}
			
			
			
			<div // 주석은 이런식으로 시작태그에 쓰거나  
				>
				
				{/*이런식으로 중괄호 안에 쓰기 */} /*이러면 다 남음 주석이 안돼 */</div>
			<Fragment>
			난 지금 구름ide로 하고 있어서 적용하기 귀찮지만 vscode쓴다면<br/> 
			ESLint : 문법 검사 도구<br/>
			Prettier : 코드 스타일 자동 정리 도구 (p. 076)<br/>
			이용하도록 하자 .!<br/>
			</Fragment>
			
			
		</div>
  	);
}

export default App;
