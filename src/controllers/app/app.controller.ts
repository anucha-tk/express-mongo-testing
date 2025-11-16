import asyncHandler from "@middlewares/asyncHandler";
import { SuccessMsgResponse } from "@response/response";

const hello = asyncHandler(async (_req, res) => {
	new SuccessMsgResponse("hello").send(res);
});

export default hello;
