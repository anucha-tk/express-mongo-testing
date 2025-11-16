import { type Document, model, Schema } from "mongoose";

export interface IUser {
	email: string;
	password: string;
}

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);
export interface IUserDocument extends IUser, Document {}

const User = model<IUserDocument>("User", userSchema);

export default User;