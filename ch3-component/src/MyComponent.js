const MyComponent = (props) => {
	return (
		<>
			<div>나의 새로운 컴포넌트 ! MyComponent</div>
			<div>안녕하세요! 제 이름은 {props.name}입니다. </div>
			<div>안녕하세요! 제 디폴트 이름은 {props.name2}입니다. </div>
				
		</>
		);
	
}
MyComponent.defaultProps ={
	name2 : 'defaultname'
};
export default MyComponent;