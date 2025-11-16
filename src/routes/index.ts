import express from "express";
import appRouter from "./app";

const apiRouterV1 = express.Router();

apiRouterV1.use("/", appRouter);

export default apiRouterV1;
