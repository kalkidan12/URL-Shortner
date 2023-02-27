import { UrlController } from "../controllers/url.controller";
import express from "express";
const router = express.Router();
const urlController = new UrlController();
router.post("/shorturl", urlController.createNewUrl);
module.exports = router;
