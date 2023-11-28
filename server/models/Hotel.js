import mongoose from 'mongoose';
const { Schema } = mongoose;


const HotelSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
	},
	type:{
		type: String,
		required: true,
	},
	city:{
		type: String,
		required: true,
	},
	Address:{
		type: String,
		required: true,
	},
	title:{
		type: String,
		required: true,
	},
	distance:{
		type: String,
		required: true,
	},

	photos:{
		type: [String],
	
	},
	desc:{
		type: String,
		required: true,
	},
	Rating:{
		type: Number,
		min: 0,
		max: 5
	},
	Rooms:{
		type: [String],
	},
	cheapestPrice:{
		type: Number,
		required: true,
	},
	featured:{
		type: Boolean,
		default: false,
	},
});

export default mongoose.model("Hotel", HotelSchema);