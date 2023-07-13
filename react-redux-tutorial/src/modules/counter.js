import {createAction, handleActions} from 'redux-actions'

// 액션타입은 대문자로 정의
// 모듈이름/액션이름
// 프로젝트가 커졌을때 액션 충돌 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


// export const increase = () => ({type : INCREASE});
// export const decrease = () => ({type : DECREASE});
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태
const initalState = {
    number: 0
};

// function counter(state = initalState, action) {
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return{
//                 number: state.number - 1
//             };
//         default:
//             return state;    
//     }
// }

const counter = handleActions({
    [INCREASE]: (state, action) => ({number:state.number + 1}),
    [DECREASE]: (state, action) => ({number:state.number - 1}),
    },
    initalState,
);

export default counter;