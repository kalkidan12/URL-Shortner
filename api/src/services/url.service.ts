import { NextFunction, Request, Response } from "express";
import validUrl from "valid-url";
const urlSchema = require("../models/url.model");
export class UrlShortnerService {
	public checkValidUrl(url: string) {
		return validUrl.isUri(url);
	}
	public async getShortUrl(url: string) {
		return await urlSchema.findOne({ url });
	}
	public async createShortUrl(url: string, shortUrl: string) {
		const newShortUrl = await new urlSchema({ url, shortUrl });
		await newShortUrl.save();
	}
}
