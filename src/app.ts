import { NotFoundError } from "@error/error";
import errorHandler from "@middlewares/errorHandler";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import apiRouterV1 from "./routes";

const app = express();
app
	.use(morgan("tiny"))
	.use(helmet())
	.disable("x-powered-by")
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use("/v1.0", apiRouterV1)
	.use((_req, _res, next) => next(new NotFoundError()))
	.use(errorHandler);

export default app;
