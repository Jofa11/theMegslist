const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	phone: {
		type: Number,
	},
	preferredContact: {
		type: String,
	},
});
