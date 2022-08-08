# ch3
MyComponent는 함수 컴포넌트 
MyComponentClass는 클래스 컴포넌트 
위 두개는 props예제 

https://github.com/facebook/prop-types 확인 -> props 타입 종류 정리 


Counter.js는 클래스 컴포넌트 state 예제
> +1 하는 예제 

Say.js는 함수 컴포넌트 state 예제 
함수 컴포넌트는 Hooks-useState를 이용하여 state 사용 
Say는 안녕하세요, 안녕히가세요, 색 바꾸기 등 


% 배열, 객체 state를 업데이트를 할때에는 사본을 만들어 사본에 원하는 값을 업데이트하고 
사본을 세터함수나 setState를 이용하여 원본 state에 업데이트하는 방식으로 한다. 