import express, { Request, Response, Application } from "express";
// import cors from "cors";
import { DevConfig } from "./env/developemnt";
import { DbConnection } from "./database/dbConnection";
import userRoute from "./routes/userRoutes";
export class App {
	public app: Application;
	public port: number;
	public config = new DevConfig();

	constructor() {
		this.app = express();
		this.port = this.config.PORT;
		this.initializeMiddleware();
		this.initializeDatabase();
		this.intializeUserRoute();
	}

	public intializeUserRoute() {
		return this.app.use("/api", userRoute);
	}
	public initializeMiddleware() {
		this.app.use(express.json());
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
