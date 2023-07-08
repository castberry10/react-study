// 액션타입은 대문자로 정의
// 모듈이름/액션이름
// 프로젝트가 커졌을때 액션 충돌 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


export const increase = () => ({type : INCREASE});
export const decerase = () => ({type : DECREASE});

// 초기상태
const initalState = {
    number: 0
};

function counter(state = initalState, action) {
    switch(action.type){
        case INCREASE:
            return{
                number: state.number + 1
            };
        case DECREASE:
            return{
                number: state.number + 1
            };
        default:
            return state;    
    }
}
export default counter;