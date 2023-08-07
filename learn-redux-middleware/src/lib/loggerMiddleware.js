const loggerMiddleware = store => next => action => {
	console.group(action && action.type);
	console.log('이전 상태', store.getState());
	console.log('액션', action);
	next(action); // 다음 미들웨어 or 리듀서에게 전달
	console.log('다음 상태', store.getState());
	console.groupEnd();
};

export default loggerMiddleware;

// 풀어쓰면 다음과 같다. 
// const loggerMiddleware = function loggerMiddleware(){
// 	return function(next){
// 		return function(action){
			
// 		}
// 	}
// }
//미들웨어랑 함수를 반환하는 함수를 반환하는 함수 
// 