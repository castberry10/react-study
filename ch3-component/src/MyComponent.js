import PropTypes from 'prop-types';

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

//PropTypes를 이용한 props 검증
//만약 3을 ㄴ넣으면 작동은 하나 콘솔로 Warning을 보여줌
//많은 PropTypes 종류는 github.com/facebbok/prop-types 에서 확인
MyComponent.propTypes = { 
	name: PropTypes.string.isRequired // isRequired는 필수 props 라고 알림
};

export default MyComponent;