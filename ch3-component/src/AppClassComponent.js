
import MyComponent from './MyComponent'
import {Component} from 'react'

class App extends Component{
	render(){
		//return <div> {name}</div> ;
		return <MyComponent/>;
	}
	// 이런식으로도 정의가 가능하다 일캐 쓰ㅡㄴ건 클래스형 컴포넌트이고 ch2의 방식은 함수형 컴포넌트. 기능은 같다.
	//차이점은 클래스형의 경우 state와 라이프사이클 기능을 사용할있다는점. 
	// 함수 컴포넌트는 메모리 덜 쓰고, 결과물의 파일크기가 비교적 작고 (별 차이 없음)
	// 주요 단점은 Hooks이 생기며 사라짐 ㄱ매뉴얼에는 함수형 컴포넌트와 Hooks 이용을 권장. 
}
export default AppClassComponent;
