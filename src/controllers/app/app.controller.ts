import type { Request, Response } from "express";

const hello = async (_req: Request, res: Response) => {
	res.status(200).json({ message: "Hello" });
};

export default hello;
