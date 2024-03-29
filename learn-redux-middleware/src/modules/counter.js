import { createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest, select, throttle} from 'redux-saga/effects';


const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload로 들어가지 않도록 두번째 인자에 ()=>undefined를 넣는다. 
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga(){
	yield delay(1000);
	yield put(increase()); // 액션 디스패치
	const number = yield select(state => state => state.counter); // state는 스토어 상태를 의미
	console.log(`현재 값은 ${number}입니다.`)
}

function* decreaseSaga(){
	yield delay(1000);
	yield put(decrease());
}

export function* counterSaga(){
	//takeEvery는 모든 액션에 대해 작업을 처리
	yield throttle(3000, INCREASE_ASYNC, increaseSaga);
	//takeLatest는 기존에 진행 중이던 작업이 있다면 취소하고
	//가장 마지막으로 실행된 작업만 수행합니다. 
	yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initialState = 0;

const counter = handleActions(
	{
		[INCREASE]: state => state + 1,
		[DECREASE]: state => state - 1
	},
	initialState
);

export default counter;