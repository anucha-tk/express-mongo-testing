import express from "express";
import hello from "../../controllers/app/app.controller";

const appRouter = express.Router();

appRouter.get("/hello", hello);

export default appRouter;
