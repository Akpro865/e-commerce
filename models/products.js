const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	comment: { type: String, required: true },
	user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }
},
{ timestamps: true })

const ProductSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	name: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	InStock: {
		type: Number,
		required: true,
		default: 0
	},
	rating: {
		type: Number,
		required: true,
		default: 0
	},
	numReviews: {
	  type: Number,
      required: true,
      default: 0,
	},
	reviews: [ReviewSchema]
}, {
	timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)