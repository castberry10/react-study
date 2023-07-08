// 액션타입은 대문자로 정의
// 모듈이름/액션이름
// 프로젝트가 커졌을때 액션 충돌 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


export const increase = () => ({type : INCREASE});
export const decerase = () => ({type : DECREASE});
