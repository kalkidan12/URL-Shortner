import { Schema, model } from "mongoose";
interface UrlInterface {
	url: string;
	shortUrl: string;
}
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
module.exports = model("Url", UrlSchema);
