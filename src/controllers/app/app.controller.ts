import asyncHandler from "@middlewares/asyncHandler";
import { SuccessMsgResponse } from "@response/response";

export class AppController {
	hello = asyncHandler(async (_req, res) => {
		new SuccessMsgResponse("hello").send(res);
	});
}
