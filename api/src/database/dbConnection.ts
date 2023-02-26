import mongoose from "mongoose";

export class DbConnection {
	public async mongooseConnection() {
		await mongoose
			.connect("mongodb://localhost:27017/url-shortner")
			.then(() => console.log("DB connected"))
			.catch((error) => {
				console.log("DB not connected");
			});
	}
}
