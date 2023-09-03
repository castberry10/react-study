const Router = require('koa-router');
const posts = new Router();

const printInfo = ctx => {
	ctx.body = {
		method: ctx.method,
		path: ctx.path,
		params: ctx.params,
	};
};

post.get('/', printInfo);
post.post('/', printInfo);
post.get('/:id', printInfo);
post.delete('/:id', printInfo);
post.put('/', printInfo);
post.patch('/', printInfo);

module.exports = posts;
