import Counter from "../components/Counter";
// import {connect} from "react-redux"
import {increase, decrease} from '../modules/counter';
import {useSelector, useDispatch} from 'react-redux';

/* 
useSelector을(를) 사용하면 connect 함수를 사용하지 않고 리덕스 상태 조회 가능
useDispatch을(를) 사용하면 컴포넌트 내부에서 스토어의 dispatch를 사용 가능
*/
const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	const dispatch = useDispatch();
	return <Counter number={number} onIncrease={() => dispatch(increase())} onDecrease = {() => dispatch(decrease())}/>;
}

export default CounterContainer;
// const CounterContainer = ({number, increase, decrease}) => {
//     return (<Counter number = {number} onIncrease={increase} onDecrease={decrease} />);
// };

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease,
//     },
// )(CounterContainer);

/* 기호에 따라 아래와 같이 작성해도 됨 */

// const mapStateToProps = state => ({
//     number: state.counter.number,

// });
// const mapDispatchToProps = dispatch => ({
//     // temp function 
//     increase : () => {
//         // console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease');
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);
