import { BadRequestError } from "@error/error";
import type { IUser } from "src/models/User";
import type { IUserRepository } from "src/repositories/user/user.repository";

export class UserService {
	constructor(private userRepo: IUserRepository) {}

	async register(user: Partial<IUser>): Promise<IUser> {
		if (!user.email) {
			throw new BadRequestError("required email");
		}
		const existing = await this.userRepo.findByEmail(user.email);
		if (existing) {
			throw new BadRequestError("User already exist");
		}
		const result = await this.userRepo.create(user);
		return result.toObject();
	}
}
