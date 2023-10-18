import { Todo } from "../../entities/todo";
import { TodoModel } from "../../lib/mongoose/models/todo-model";
import { TodoRepository } from "../todo-repository";

export class MongooseTodoRepository implements TodoRepository {
  async create({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Promise<Todo> {
    const todo = new TodoModel({
      name,
      description,
    });
    await todo.save();
    return new Todo(
      todo._id.toString(),
      todo.name,
      todo.description,
      todo.completed
    );
  }

  async delete(id: string): Promise<void> {
    await TodoModel.findByIdAndDelete(id);
  }

  async findAll(): Promise<Todo[]> {
    const todos = await TodoModel.find();
    return todos.map(
      (todo) =>
        new Todo(
          todo._id.toString(),
          todo.name,
          todo.description,
          todo.completed
        )
    );
  }

  async findById(id: string): Promise<Todo> {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return new Todo(
      todo._id.toString(),
      todo.name,
      todo.description,
      todo.completed
    );
  }

  async update({
    id,
    name,
    description,
    completed,
  }: {
    id: string;
    name: string;
    description: string;
    completed: boolean;
  }): Promise<Todo> {
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      { name, description, completed },
      { new: true }
    );
    if (!todo) {
      throw new Error("Todo not found");
    }
    return new Todo(
      todo._id.toString(),
      todo.name,
      todo.description,
      todo.completed
    );
  }
}
