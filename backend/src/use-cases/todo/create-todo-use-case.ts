import { Todo } from "../../entities/todo";
import { TodoRepository } from "../../repositories/todo-repository";
import { CreateTodoDTO } from "./dtos/create-todo-dto";

export class CreateTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute({ name, description }: CreateTodoDTO): Promise<Todo> {
    const todo = await this.todoRepository.create({ name, description });
    return todo;
  }
}
