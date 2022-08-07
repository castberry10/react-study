import MyComponent from './MyComponent'
import Counter from './Counter'
import Say from './Say'

const App =() => {
	// return <MyComponent name = "React" a = "Aprops" > // 마이컴포넌트 (mycomponent 태그 사이) //</MyComponent>;
	return (
		<div>
			<Counter/>
			<br/>
			<br/>
			<br/>
			<Say/>
		</div>
		   );
};
export default App;
