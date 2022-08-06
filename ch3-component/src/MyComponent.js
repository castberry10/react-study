const MyComponent = (props) => {
	const {a, children } = props; // 편함
	return (
		<>
			<div>나의 새로운 컴포넌트 ! MyComponent</div>
			<div>안녕하세요! 제 이름은 {props.name}입니다. </div>
			<div>안녕하세요! 제 디폴트 이름은 {props.name2}입니다. </div>
			<div>children 값 =>  {children}</div>
			<div>{a}</div>
				
		</>
		);
	
}
MyComponent.defaultProps ={
	name2 : 'defaultname'
};
export default MyComponent;