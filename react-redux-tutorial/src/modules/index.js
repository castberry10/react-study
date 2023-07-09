import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

// 파일 이름을 index.js로 하면 불러올때 디렉터리 이름만 작성해도 동작 
