import { Schema } from "mongoose";

export const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);
