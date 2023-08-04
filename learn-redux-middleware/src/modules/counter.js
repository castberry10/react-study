import { createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0;
// 1초뒤 함수 디스패치 

export const increaseAsync = () => dispatch => {
	setTimeout(() => {
		dispatch(increase());
	}, 1000);
};

export const decreaseAsync = () => dispatch => {
	setTimeout(() => {
		dispatch(decrease());
	}, 1000);
};


const counter = handleActions(
	{
		[INCREASE]: state => state + 1,
		[DECREASE]: state => state - 1
	},
	initialState
);

export default counter;