import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import {takeLatest} from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth'

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/SAMPLE_ACTION';


const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
	'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
	'auth/LOGIN',
);
// 위 코드와 아래코드와 같은 동작
// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
// const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'



export const changeField = createAction(CHANGE_FIELD, 
	({form, key, value}) => ({
		form, // register, login
		key, // username, password, passwordConfirm
		value, // 실제 바꾸는 값
	}),
	);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register / login

export const register = createAction(REGISTER, ({username, password}) => ({
	username,
	password,
}));

export const login = createAction(LOGIN, ({username, password}) => ({
	username,
	password,
}));

// 사가 생성 
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga(){
	yield takeLatest(REGISTER, registerSaga);
	yield takeLatest(LOGIN, loginSaga);
}

const initialState = {

	register:{
		username: '',
		password: '',
		passwordConfire: '',
	},
	login: {
		username: '',
		password: '',
	},
	auth: null,
	authError: null,
};

const auth = handleActions(
	{
		[CHANGE_FIELD]: (state, {payload: {form, key, value}}) => 
		produce(state, draft => {
			draft[form][key] = value; //예 : state.register.username을 바꾼다. 
		}),
		[INITIALIZE_FORM]: (state, {payload: form}) => ({
			...state,
			[form]: initialState[form],
			authError:null, // 폼 전환 시 회원 인증 에러 초기화
		}),
		[REGISTER_SUCCESS]: (state, {payload: auth}) => ({
			...state,
			authError:null, 
			auth,
		}),
		[REGISTER_FAILURE]: (state, {payload: error}) => ({
			...state,
			authError: error,
		}),
		[LOGIN_SUCCESS]: (state, {payload: auth}) => ({
			...state,
			authError:null, 
			auth,
		}),
		[LOGIN_FAILURE]: (state, {payload: error}) => ({
			...state,
			authError: error,
		}),
	},
	initialState,
);

export default auth;