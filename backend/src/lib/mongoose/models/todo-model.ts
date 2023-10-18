import { model } from "mongoose";
import { TodoSchema } from "../schemas/todo-schema";

export const TodoModel = model("Todo", TodoSchema);
