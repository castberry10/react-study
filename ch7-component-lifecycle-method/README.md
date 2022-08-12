# ch7 - 컴포넌트의 라이프사이클 메서드

ErrorBoundary는 에러 잡아주는 컴포넌ㄴ트
라이프사이클샘플.js return 부분에서 
{this.props.missing.value} 를 추가하면 에러발생한다. 
> 존재하지 않은 missing porps를 조회하니까 에러발생


이때 에러 바운더리js가 알아서 잘 처리해준다. 