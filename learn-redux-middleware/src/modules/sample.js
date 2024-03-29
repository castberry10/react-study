import {createAction, handleActions} from 'redux-actions';
import { takeLatest} from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// 액션타입 선언
// 한요청당 세 개를 만들어야한다. 
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
//thunk 함수 생성
// 내부에서는 시작, 성공, 실패했을 때 다른 액션을 디스패치한다. 

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga(){
	yield takeLatest(GET_POST, getPostSaga);
	yield takeLatest(GET_USERS, getUsersSaga);
}
// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading 객체에서 관리

const initialState = {
	loading: {
		GET_POST: false,
		GET_USERS: false
	},
	post: null,
	users: null
};

const sample = handleActions(
	{
		[GET_POST_SUCCESS]: (state, action) => ({
			...state,
			post: action.payload
		}),
		[GET_USERS_SUCCESS]: (state, action) => ({
			...state,
			users: action.payload
		}),
		
	},
	initialState
);

export default sample;