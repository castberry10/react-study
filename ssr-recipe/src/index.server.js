import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.randerToString(
	<div>Hello Server Side Rendering!</div>
);

console.log(html);
// 서버에서 리액트 컴포넌트를 렌더링할때는
// ReactDOMServer의 renderToString이라는 함수를 사용.
// 이함수에 JSX를 넣어서 호출하면 렌더 결과를 문자열로 반환