import { Todo } from "../../entities/todo";
import { TodoRepository } from "../todo-repository";
import { randomUUID } from "node:crypto";

type inMemoryTodo = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
};

export class InMemoryTodoRepository implements TodoRepository {
  constructor(private todos: inMemoryTodo[] = []) {}

  async create({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Promise<Todo> {
    const todo: inMemoryTodo = {
      id: randomUUID(),
      name,
      description,
      completed: false,
    };
    this.todos.push(todo);
    return new Todo(todo.id, todo.name, todo.description, todo.completed);
  }

  async delete(id: string): Promise<void> {
    this.todos = this.todos.filter((todo) => todo.id === id);
  }

  async findAll(): Promise<Todo[]> {
    return this.todos.map(
      (todo) => new Todo(todo.id, todo.name, todo.description, todo.completed)
    );
  }

  async findById(id: string): Promise<Todo> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo === undefined) {
      throw new Error("Cannot find todo by id");
    }
    return new Todo(todo.id, todo.name, todo.description, todo.completed);
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
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo === undefined) {
      throw new Error("Cannot find todo by id to update");
    }
    const updatedTodo = {
      ...todo,
      name,
      description,
      completed,
    };
    this.todos.map((todo) => (todo.id !== id ? todo : updatedTodo));
    return new Todo(
      updatedTodo.id,
      updatedTodo.name,
      updatedTodo.description,
      updatedTodo.completed
    );
  }
}
