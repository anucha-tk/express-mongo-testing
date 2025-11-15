import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectToDatabase } from "./common/database/db.ts";
import apiRouterV1 from "./routes/index.ts";

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app.use(morgan("combined"));
app.use(helmet());
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
	try {
		app.use("/v1.0", apiRouterV1);
		const server = app.listen(port, "0.0.0.0", () => {
			console.log(`[server] Listening on port ${port}`);
		});
		connectToDatabase();

		// optional: handle runtime errors
		server.on("error", (err) => {
			console.error("[server] Server error:", err);
			process.exit(1);
		});
	} catch (error) {
		console.error("[server] Failed to start server:", error);
		process.exit(1);
	}
};

startServer();
