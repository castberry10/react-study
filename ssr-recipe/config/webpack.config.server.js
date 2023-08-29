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
	},
	module: {
		rules: [
			{
				oneOf:[
					//자바스크립트를 위한 처리 
					//기존 webpack.config.js를 참고하여 작성
					{
						test: /\.(js|mjs|jsx|ts|tsx)$/,
						include: paths.appSrc,
						loader: require.resolve('babel-loader'),
						options: {
							customize: require.resolve(
								'babel-preset-react-app/webpack-overrides'
							),
							presets: [
								[
									require.resolve('babel-preset-react-app'),
									{
										runtime: 'automatic',
									},
								],
							],
							plugins: [
								[
									require.resolve('babel-plugin-named-asset-import'),
									{
										loaderMap: {
											svg:{
												ReactComponent:
												'@svgr/webpack?-svgo,+titleProp,+ref![path]',
											},
										},
									},
								],
							],
							cacheDirectory: true,
							cacheComponent: false,
							compact: false,
						},
					},
					//css를 위한 처리
					{
						test: cssRegex,
						exclude: cssModuleRegex,
						//exportOnlyLocals: true 옵션을 설정해야 실제 css파일을 생성하지 않는다.
						loader:require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: {
								exportOnlyLocals: true,
							},
						},
					},
					//css Module을 위한 처리
					{
						test: cssModuleRegex,
						loader:require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: {
								exportOnlyLocals: true,
								getLocalIdent: getCSSModuleLocalIdent,
							},
						},
					},
					//Sass
					{
						test: sassRegex,
						exclude: sassModuleRegex,
						use: [
							{
								loader:require.resolve('css-loader'),
								options: {
									importLoaders: 3,
									modules:{
										exportOnlyLocals: true,
									},
								},
							},
							require.resolve('sass-loader'),
						],
					},
					// Sass + css 
					{
						test: sassRegex,
						exclude: sassModuleRegex,
						use: [
							{
								loader:require.resolve('css-loader'),
								options: {
									importLoaders: 3,
									modules:{
										exportOnlyLocals: true,
										getLocalIdent: getCSSModuleLocalIdent,
									},
								},
							},
							require.resolve('sass-loader'),
						],
					},
					//url-loader를 위한 설정
					{
						test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
						loader: require.resolve('url-loader'),
						options: {
							emitFile: false, // 파일을 따로 저장 X
							limit: 10000, // 원래는 9.76kb넘어가면 파일로 저장,
							// emitFile 이 false라면 경로만 준비, 파일 저장 X
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
					// 위에서 설정된 확장자를 제외한 파일은
					// file-loader를 사용
					{
						loader: require.resolve('file-loader'),
						exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
						options: {
							emitFile: false, //파일을 따로 저장하지 않는 옵션
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
};
/* 로더 설정 */