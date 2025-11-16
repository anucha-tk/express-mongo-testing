import { TaskStatus } from "@helpers/task.enum";
import { model, Schema } from "mongoose";

const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		status: {
			type: String,
			enum: TaskStatus,
			default: "pending",
		},
		dueDate: {
			type: Date,
			required: true,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Task = model("Task", taskSchema);

export default Task;