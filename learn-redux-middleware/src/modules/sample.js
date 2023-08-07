import {handleActions} from 'redux-actions';
import * as api from '../lib/api';

// 액션타입 선언
// 한요청당 세 개를 만들어야한다. 

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//thunk 함수 생성
// 내부에서는 시작, 성공, 실패했을 때 다른 액션을 디스패치한다. 

export const getPost = id => async dispatch => {
	dispatch({type: GET_POST});
	try{
		const response = await api.getPost(id);
		dispatch({
			type: GET_POST_SUCCESS,
			payload: response.data
		}); //요청 성공
	} catch(e){
		dispatch({
			type: GET_POST_FAILURE,
			payload: e,
			error: true
		}); // 에러 발생
		throw e; // 나중에 컴포넌트단에서 에러를 조회하기 위함
	}
};

export const getUsers = () => async dispatch => {
	dispatch({type: GET_USERS}); // 요청 시작을 알림
	try{
		const response = await api.getUsers(id);
		dispatch({
			type: GET_USERS_SUCCESS,
			payload: response.data
		}); //요청 성공
	} catch(e){
		dispatch({
			type: GET_USERS_FAILURE,
			payload: e,
			error: true
		}); // 에러 발생
		throw e; // 나중에 컴포넌트단에서 에러를 조회하기 위함
	}
};

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
		[GET_POST]: state => ({
			...state,
			loading: {
				...state.loading,
				GET_POST: true // 요청시작
			}
		}),
		[GET_POST_SUCCESS]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_POST: false // 요청완료
			}
		}),
		[GET_POST_FAILURE]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_POST: false // 요청완료
			}
		}),
		[GET_USERS]: state => ({
			...state,
			loading: {
				...state.loading,
				GET_USERS: true // 요청시작
			}
		}),
		[GET_USERS_SUCCESS]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_USERS: false // 요청완료
			}
		}),
		[GET_USERS_FAILURE]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_USERS: false // 요청완료
			}
		})
	},
	initialState
);

export default sample;