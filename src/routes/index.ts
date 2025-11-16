import express from "express";
import appRouter from "./app";
import userRouter from "./user/user.routes";

const apiRouterV1 = express.Router();

apiRouterV1.use("/", appRouter);
apiRouterV1.use("/user", userRouter);

export default apiRouterV1;
