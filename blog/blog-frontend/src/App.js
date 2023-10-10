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
