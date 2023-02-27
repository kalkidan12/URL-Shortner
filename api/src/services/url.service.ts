import { NextFunction, Request, Response } from "express";
var validUrl = require("valid-url");
const urlSchema = require("../models/url.model");
export class UrlShortnerService {
	public checkValidUrl(url: string) {
		return validUrl.isUri(url);
	}
	public async getShortUrl(url: string) {
		const existUrl = await urlSchema.findOne({ url });
		return existUrl;
	}
	public async getShortedUrl(shortUrl: string) {
		const existUrl = await urlSchema.findOne({ shortUrl });
		return existUrl;
	}
	public async createShortUrl(url: string, shortUrl: string) {
		const newShortUrl = await new urlSchema({ url, shortUrl });
		return await newShortUrl.save();
	}
}
