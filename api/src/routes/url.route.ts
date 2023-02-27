import { UrlController } from "../controllers/url.controller";
import express from "express";
const router = express.Router();
const urlController = new UrlController();
router.post("/createshorturl", urlController.createNewUrl);
router.get("/:shortUrl", urlController.redirectToUrl);
module.exports = router;
