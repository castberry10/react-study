import {Route, Routes} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

/*
/@:username으로 감싼 것은 아래와 같은 기능을 함
<Route path="/@:username" element={<PostListPage/>}/>
<Route path="/@:username/:postId" element={<PostPage/>}/>

<Route path="/@:username">
		  	<Route index element={<PostListPage/>}/>
		  	<Route path=":postId" element={<PostPage/>}/>
</Route>
- - - 
리액트 라우터 6.5 에서 @가 들어가는 형태의 파라미터 지원을 없앴다고 합니다.

따라서, App.js 에서

      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
이렇게 /@:username -> /:username 으로 바꿔주세요.

그리고 이후 username을 사용해야 할 때는 다음과 같이 코드를 작성하시면 됩니다.

  const params = useParams();
  const username = params.username.split('@')[1];
*/
function App() {
  return (
    <Routes>
		  <Route path="/" element={<PostListPage/>}/>
		  <Route path="/login" element={<LoginPage/>}/>
		  <Route path="/register" element={<RegisterPage/>}/>
		  <Route path="/write" element={<WritePage/>}/>
		  <Route path="/:username">
		  	<Route index element={<PostListPage/>}/>
		  	<Route path=":postId" element={<PostPage/>}/>
		  </Route>
	</Routes>
  );
}

export default App;
