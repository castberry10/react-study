import logo from './logo.svg';
import './App.css';
// import notify from './notify';
function App() {
	const onClick = () => {
		// notify();
		import('./notify').then(result => result.default()); // 표준 문법은 아니다. import를 함수로 사용하면 Promise를 반환
	};
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Hello react!
        </p>
        
      </header>
    </div>
  );
}

export default App;
