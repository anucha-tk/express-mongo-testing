import express from "express";
import { AppController } from "src/controllers/app/app.controller";

const appRouter = express.Router();

const appController = new AppController();

appRouter.get("/hello", appController.hello);

export default appRouter;
