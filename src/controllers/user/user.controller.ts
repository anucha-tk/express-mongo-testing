import asyncHandler from "@middlewares/asyncHandler";
import { SuccessCreateResponse } from "@response/response";
import type { Request, Response } from "express";
import type { UserService } from "src/services/user.service";

export class UserController {
	constructor(private userService: UserService) {}

	register = asyncHandler(async (req: Request, res: Response) => {
		const user = await this.userService.register(req.body);
		new SuccessCreateResponse("Create User Success", user).send(res);
	});
}
