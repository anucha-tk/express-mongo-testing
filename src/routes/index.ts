import express from "express";
import appRouter from "./app/index.ts";

const apiRouterV1 = express.Router();

apiRouterV1.use("/", appRouter);

export default apiRouterV1;
