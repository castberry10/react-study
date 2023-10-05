const mongoose = require('mongoose'); // common js 
const {Schema} = require('mongoose');

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
});
const User = mongoose.model('User', UserSchema);
export default User;

