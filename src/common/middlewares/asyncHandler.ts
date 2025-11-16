import type { NextFunction, Request, Response } from "express";

export type AsyncFunction = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<unknown>;

/**
 * Middleware catching exception inside async function
 * */
export default (execution: AsyncFunction) =>
	(req: Request, res: Response, next: NextFunction) => {
		execution(req, res, next).catch(next);
	};
