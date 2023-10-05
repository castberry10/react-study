const mongoose = require('mongoose'); // common js 
const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
});

// 사용자정의 인스턴트 메서드
UserSchema.methods.setPassword = async function(password){
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};
// 사용자정의 인스턴트 메서드
UserSchema.methods.checkPassword = async function(password){
	const result = await bcrypt.compare(password, this.hashedPassword);
	retrun result; // true / false
};


const User = mongoose.model('User', UserSchema);
export default User;

