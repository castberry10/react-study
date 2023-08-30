# webpack-node-externals / #1

브라우저에서 사용할때 결과물 파일에 리액트 라이브러리랑 app 코드가 공존 해야함  
서버에서는 결과물 파일안에 리액트 라이브러리가 들어있지않아도 됨.  <- node_modules를 통해 불러와서 사용가능하기때문  

따라서 서버를 위해 번들링할때 node_modules에서 불러오는 것을 제외하고 번들링 하는 것이 좋다.  
-> webpack-node-externals 사용  

