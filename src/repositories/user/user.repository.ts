import type { Model } from "mongoose";
import type { IUser, IUserDocument } from "src/models/User";

export interface IUserRepository {
	findByEmail(email: string): Promise<IUserDocument | null>;
	create(user: Partial<IUser>): Promise<IUserDocument>;
}

export class UserRepository implements IUserRepository {
	constructor(private UserModel: Model<IUserDocument>) {}

	findByEmail(email: string): Promise<IUserDocument | null> {
		return this.UserModel.findOne({ email }).exec();
	}
	create(user: Partial<IUser>): Promise<IUserDocument> {
		return this.UserModel.create(user);
	}
}
