import Counter from "../components/Counter";
import {increase, decrease} from '../modules/counter';
import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';
/* 
useSelector을(를) 사용하면 connect 함수를 사용하지 않고 리덕스 상태 조회 가능
useDispatch을(를) 사용하면 컴포넌트 내부에서 스토어의 dispatch를 사용 가능
*/
const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	const dispatch = useDispatch();
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
	
	return <Counter number={number} onIncrease={onIncrease} onDecrease = {onDecrease}/>;
}

export default CounterContainer;
