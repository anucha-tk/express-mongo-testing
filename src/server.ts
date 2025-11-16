import Logger from "@logger/logger";
import * as emoji from "node-emoji";
import app from "./app";
import { connectToDatabase } from "./common/database/db";
import { environment, port } from "./config";

const startServer = () => {
	try {
		connectToDatabase();
		app
			.listen(port, () => {
				Logger.info("------------------------------------------------------");
				Logger.info(
					`${emoji.get("rocket")} server running on port : ${port}, ENV: ${environment}`,
				);
				Logger.info("------------------------------------------------------");
			})
			.on("error", (e) => Logger.error(e));
	} catch (error) {
		console.error("[server] Failed to start server:", error);
		process.exit(1);
	}
};

startServer();
