// 웹팩환경설정 파일
const paths = require('./paths');

module.exports = {
	mode: 'production', // 프로덕션 모드 설정 -> 최적화 옵션 활성화
	entry: paths.ssrIndexJS, // 엔트리 경로
	target: 'node', // node환경에서 실행될 것이라 명시
	output: {
		path: paths.ssrBuild, //빌드 경로
		filename: 'server.js', // 파일이름
		chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
		publicPath: paths.publicUrlOrPath, // 정적 파일이 제공될 경로
	}
};