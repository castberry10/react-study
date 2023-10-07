const Joi = require('joi');
const User = require('../../models/user');


/*
POST /api/auth/register
{
username: 'A',
password" 'B'
}
*/
exports.register = async ctx => {
	//Body 체크
	const schema = Joi.object().keys({
		username: Joi.string()
		.alphanum()
		.min(3)
		.max(20)
		.required(),
		password: Joi.string().required(),
	});
	const result = schema.validate(ctx.request.body);
	if (result.error){
		ctx.status = 400;
		ctx.body = result.error;
		return;
	}
	// 체크 끝
	const {username, password} = ctx.request.body;
	try{
		//username이 존재하는지 체크
		const exists = await User.findByUsername(username);
		if(exists){
			ctx.status = 409 // Conflict
			return;
		}
		const user = new User({
			username,
		});
		await user.setPassword(password);
		await user.save();
		
		//응답할 데이터에서 해쉬비번 제거
		const data = user.toJSON();
		delete data.hashedPassword;
		ctx.body = data;
	} catch(e){
		ctx.throw(500, e);
	}
};

exports.login = async ctx => {
	
};

exports.check = async ctx => {
	
};

exports.logout = async ctx => {
	
};

