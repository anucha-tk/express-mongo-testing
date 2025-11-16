import express from "express";
import { UserController } from "src/controllers/user/user.controller";
import User from "src/models/User";
import { UserRepository } from "src/repositories/user/user.repository";
import { UserService } from "src/services/user.service";

const router = express.Router();

const userRepo = new UserRepository(User);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

router.post("/register", userController.register);

export default router;
