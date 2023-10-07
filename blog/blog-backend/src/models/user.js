const mongoose = require('mongoose'); // common js 
const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
});

// 사용자정의 인스턴트 메서드
//화살표 함수를 사용하면 this로 문서인스턴스를 못 가르킴
UserSchema.methods.setPassword = async function(password){
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};
// 사용자정의 인스턴트 메서드
UserSchema.methods.checkPassword = async function(password){
	const result = await bcrypt.compare(password, this.hashedPassword);
	return result; // true / false
};

//스태틱메서드
//여기서 this는 모델을 가르킨다. 
UserSchema.statics.findByUsername = function(username){
	return this.findOne({username});
};


const User = mongoose.model('User', UserSchema);
module.exports = User;

