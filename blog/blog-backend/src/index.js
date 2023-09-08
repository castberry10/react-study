const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우트


//라우터 적용 전 적용
app.use(bodyParser());

// app 인스터스에 라우터 적용 
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
	console.log('Listening to port 4000');
});

