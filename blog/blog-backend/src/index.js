require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const {PORT, MONGO_URI} = process.env;


mongoose.connect(MONGO_URI)
	.then(()=>{
	console.log('Connected to MongoDB')
	})
	.catch(e => {
	console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); // api 라우트


//라우터 적용 전 적용
app.use(bodyParser());

// app 인스터스에 라우터 적용 
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
	console.log('Listening to port %d', port);
});

