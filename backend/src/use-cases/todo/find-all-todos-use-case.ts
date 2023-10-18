import { Todo } from "../../entities/todo";
import { TodoRepository } from "./../../repositories/todo-repository";
export class FindAllTodosUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll();
    return todos;
  }
}
