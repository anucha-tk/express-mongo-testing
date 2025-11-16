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
		toObject: {
			virtuals: true,
			versionKey: false,
			transform: (_, ret) => {
				// biome-ignore lint/suspicious/noExplicitAny: <fix any>
				const obj = ret as any;
				delete obj._id;
				delete obj.password;
				return ret;
			},
		},
	},
);

export interface IUserDocument extends IUser, Document {}

const User = model<IUserDocument>("User", userSchema);

export default User;
