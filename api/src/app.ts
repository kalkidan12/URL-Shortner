import express, { Application } from "express";
import cors from "cors";
import { DevConfig } from "./env/development";
import { DbConnection } from "./database/dbConnection";
export class App {
	public app: Application;
	public port: number;
	public config = new DevConfig();

	constructor() {
		this.app = express();
		this.port = this.config.PORT;
		this.initializeMiddleware();
		this.initializeDatabase();
	}

	public initializeMiddleware() {
		this.app.use(express.json());
		this.app.use(cors());
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
