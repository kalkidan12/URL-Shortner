import { UrlShortnerService } from "../services/url.service";
import { Request, Response, NextFunction } from "express";
import shortid from "shortid";
const urlServices = new UrlShortnerService();
export class UrlController {
	public async createNewUrl(req: Request, res: Response, next: NextFunction) {
		const newUrl = req.body;
		try {
			if (newUrl.url == null)
				return res.status(404).json({ message: "please provide a valid url" });
			const isValidUrl = urlServices.checkValidUrl(newUrl.url);
			if (!isValidUrl)
				return res.status(400).json({ message: "It is not valid url" });
			const existUrl = await urlServices.getShortUrl(newUrl.url);
			if (existUrl)
				return res.status(200).json({
					message: "url already exist!",
					shortedUrl: `${req.headers.host}/${existUrl.shortUrl}`,
				});
			const result = await urlServices.createShortUrl(
				newUrl.url,
				shortid.generate(),
			);
			return res.status(201).json({
				message: "url shortened successfully",
				shortedUrl: `${req.headers.host}/${result.shortUrl}`,
			});
		} catch (error) {
			console.log(error);
		}
	}
	public async redirectToUrl(req: Request, res: Response, next: NextFunction) {
		const shortUrl = req.params.shortUrl;
		try {
			if (shortUrl == null)
				return res
					.status(404)
					.json({ message: "please provide a valid short url" });

			const existUrl = await urlServices.getShortedUrl(shortUrl);
			if (!existUrl)
				return res.status(404).json({
					message: "this short url not found!",
				});

			res.redirect(existUrl.url);
		} catch (error) {
			console.log(error);
		}
	}
}
