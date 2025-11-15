import hello from "@src/controllers/app/app.controller.ts";
import express from "express";

const appRouter = express.Router();

appRouter.get("/hello", hello);

export default appRouter;
