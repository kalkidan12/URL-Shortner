import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import { DevConfig } from "./env/development";
import { DbConnection } from "./database/dbConnection";
const urlRoute = require("./routes/url.route");

export class App {
	public app: Application;
	public port: number;
	public config = new DevConfig();

	constructor() {
		this.app = express();
		this.port = this.config.PORT;
		this.initializeMiddleware();
		this.initializeDatabase();
		this.initializeRoutes();
	}

	public initializeMiddleware() {
		this.app.use(express.json());
		this.app.use(
			cors({
				origin: "http://localhost:3000",
				credentials: true,
			}),
		);
		this.app.use(express.urlencoded({ extended: false }));
	}
	public initializeRoutes() {
		this.app.use("/api/url", urlRoute);
		this.app.use("/", urlRoute);
		this.app.use(function (req: Request, res: Response, next: NextFunction) {
			res.header("Access-Control-Allow-Origin", "*");
			next();
		});
	}
	public checkUrl() {
		this.app.get("/api", (req: Request, res: Response) => {
			res.json("Working...");
		});
	}
	public initializeDatabase() {
		return new DbConnection().mongooseConnection();
	}
	public listen() {
		this.app.listen(this.port, () => {
			console.log(`server is running on port ${this.port}`);
		});
	}
}
