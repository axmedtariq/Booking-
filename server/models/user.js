import mongoose from 'mongoose';
const { Schema } = mongoose;


const UserSchema = new mongoose.Schema({
	username:{
		type: String,
		required: true,
		unique: true,
	},
	Email:{
		type: String,
		required: true,
		unique: true,
	},
	Country:{
		type: String,
		required: true,
	},
	img:{
		type: String,
		
	},
	City:{
		type: String,
		required: true,
	},
	Phone:{
		type: String,
		required: true,
	},
	password:{
		type: String,
		required: true,
	},
	
	IsAdmin:{
		type: Boolean,
		default: false,
	},
}, {timestamps: true});

export default mongoose.model("User", UserSchema);