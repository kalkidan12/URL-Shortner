import { Schema, model } from "mongoose";
const UrlSchema = new Schema({
	url: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
});
module.exports = model("UrlSchema", UrlSchema);
