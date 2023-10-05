const Post = require('../../models/post');
const mongoose = require('mongoose');
const Joi = require('joi'); // 쉬운 요청 body 검증을 위한 라이브러리

const {ObjectId} = mongoose.Types;

exports.checkObjectId = (ctx, next) => {
	const {id} = ctx.params;
	if (!ObjectId.isValid(id)){
		ctx.status = 400; // bad request
		return;
	}
	return next();
};

// export const write = ctx => {}; 와 같다. 
exports.write = async ctx => {
	const schema = Joi.object().keys({
		// 객체가 다음 필드를 가지고 있음을 검증
		title: Joi.string().required(), //required()가 있으면 필수 항목
		body: Joi.string().required(),
		tags: Joi.array()
				.items(Joi.string())
				.required(), // 문자열로 이루어진 배열
	});
	const result = schema.validate(ctx.request.body);
	if(result.error){
		ctx.status = 400; // bad request
		ctx.body = result.error;
		return;
	}
	// - - - 위 코드는 request body 검증 
	const {title, body, tags} = ctx.request.body;
	const post = new Post({
		title,
		body,
		tags,
	});
	
	try{
		await post.save();
		ctx.body = post;
	} catch (e){
		ctx.throw(500, e);
	}
};

exports.list = async ctx => {
	try{
		const posts = await Post.find().sort({_id: -1}).exec();
		ctx.body = posts;
	}catch(e){
		ctx.throw(500, e);
	}
	
};
exports.read = async ctx => {
	const {id} = ctx.params;
	try{
		const post =await Post.findById(id).exec();
		if (!post){
			ctx.status = 404;
			return;
		}
		ctx.body = post;
	}catch (e){
		ctx.throw(500, e);
	}
};
exports.remove = async ctx => {
	const {id} = ctx.params;
	try{
		await Post.findByIdAndRemove(id).exec();
		ctx.status = 204; // No content
	} catch(e){
		ctx.throw(500, e)
	}
	
};
exports.update = async ctx => {
	const {id} = ctx.params;
	// - - write와 다르게 required가 없다. 
	const schema = Joi.object().keys({
		// 객체가 다음 필드를 가지고 있음을 검증
		title: Joi.string(), //required()가 있으면 필수 항목
		body: Joi.string(),
		tags: Joi.array()
				.items(Joi.string()), // 문자열로 이루어진 배열
	});
	const result = schema.validate(ctx.request.body);
	if(result.error){
		ctx.status = 400; // bad request
		ctx.body = result.error;
		return;
	}
	// -- 
	try{
		const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
			new: true // 이값이 true면 업데이트된 데이터를 반환, false라면 업데이트되기 전 데이터를 반환
		}).exec();
		
		if(!post){
			ctx.status = 404;
			return;
		}
		ctx.body = post;
	} catch (e){
		ctx.throw(500, e)
	}
};






// let postId = 1 // id 초기값

// // posts 배열 초기 데이터
// const posts = [
// 	{
// 		id : 1,
// 		title: '제목',
// 		body: '내용',
// 	},
// ];

// /* 포스트 작성
// POST /api/posts 
// {title, body}
// */

// exports.write = ctx => {
// 	// REST API의 Request Body 는 ctx.request.body에서 조회 가능
// 	const { title, body} = ctx.request.body;
// 	postId += 1;
// 	const post = {id: postId, title, body};
// 	posts.push(post);
// 	ctx.body = post;
// }


// /* 포스트 목록 조회
// GET /api/posts 
// */

// exports.list = ctx => {
// 	ctx.body =posts;
// };

// /* 특정 포스트 조회 
// GET /api/posts/:id
// */
// exports.read = ctx => {
// 	const {id} = ctx.params;
// 	//주어진 id 값으로 포스트를 찾는다. 
// 	//파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
// 	// 비교할 p.id값을 문자열로 변경
// 	const post = posts.find(p=>p.id.toString() === id);
// 	// 포스트 없으면 오류반환
// 	if (!post){
// 		ctx.status = 404;
// 		ctx.body = {
// 			massage: '포스터가 존재하지 않습니다.',
			
// 		};
// 		return;
// 	}
// 	ctx.body = post;
// };

// /* 특정 포스터 제거
// DELETE /api/posts/:id
// */
// exports.remove = ctx => {
// 	const {id} = ctx.params;
// 	//해당 id를 가진 post가 몇 번째인지 확인
// 	const post = posts.find(p=>p.id.toString() === id);
// 	//포스트가 없으면 오류 반환
// 	if (index === -1){
// 		ctx.status = 404;
// 		ctx.body = {
// 			massage: '포스트가 존재하지 않습니다.',
// 		};
// 		return;
// 	}
	
// 	//index 번째 아이템을 제거합니다.
// 	posts.splice(index, 1);
// 	ctx.status = 204; //No Content
// };

// /* 포스트 수정(교체)
// PUT /api/posts/:id
// {title, body}
// */

// exports.replace = ctx => {
// 	//PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할때 사용
// 	const {id} = ctx.params;
// 	//해당 id를 가진 post가 몇 번째인지 확인
// 	const index = posts.findIndex(p=>p.id.toString() === id);
// 	//포스트가 없으면 오류반환
// 	if(index === -1){
// 		ctx.status = 404;
// 		ctx.body = {
// 			massage: '포스트가 존재하지 않습니다.'
// 		}
// 		return;
// 	}
// 	//전체 객체를 덮어 씌움
// 	// 따라서 id를 제외한 기존 정보를 날리고, 객체를 서로 만듭니다. 
// 	posts[index] = {
// 		id,
// 		...ctx.request.body,
// 	};
// 	ctx.body = posts[index];
// };

// /* 포스트 수정(특정필두 변경)
// PATCH /api/posts/:id
// {title, body}
// */

// exports.update = ctx => {
// 	//PATCH 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할때 사용
// 	const {id} = ctx.params;
// 	//해당 id를 가진 post가 몇 번째인지 확인
// 	const index = posts.findIndex(p=>p.id.toString() === id);
// 	//포스트가 없으면 오류반환
// 	if(index === -1){
// 		ctx.status = 404;
// 		ctx.body = {
// 			massage: '포스트가 존재하지 않습니다.'
// 		}
// 		return;
// 	}
// 	//전체 객체를 덮어 씌움
// 	// 따라서 id를 제외한 기존 정보를 날리고, 객체를 서로 만듭니다. 
// 	posts[index] = {
// 		...posts[index],
// 		...ctx.request.body,
// 	};
// 	ctx.body = posts[index];
// };
