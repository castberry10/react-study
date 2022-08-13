# ch8 - Hooks 

Hooks기능은 리액트 v16.8에 새로 생긴 기능

함수컴포넌트에서는 못했던 여러 작업을 할 수 있게했다. 

1. useState
2. useEffect
3. useReducer
4. useMemo
5. useCallback
6. useRef
. . .
useReducer 장점 
컴포넌트 업데이트 로직을 컴포넌트 바깥으로 꺼낼 수 있다. 
useReducer 
첫 파라미터 > 리듀서 함수
두 번째 파라미터 > 리듀서의 기본 값 

리듀서는 현재 상태, 업데이트를 위해 필요헌 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수


Counter - useState 예제
Info - useState + useEffect
Counter - useReducer예제