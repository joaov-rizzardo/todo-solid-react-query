import { Todo } from "../../entities/todo";
import { TodoRepository } from "./../../repositories/todo-repository";
import { UpdateTodoDTO } from "./dtos/update-todo-dto";
export class UpdateTodoUseCase {
  constructor(private todoRepository: TodoRepository) {}

  public async execute({
    id,
    name,
    completed,
    description,
  }: UpdateTodoDTO): Promise<Todo> {
    const todo = await this.todoRepository.update({
      id,
      name,
      completed,
      description,
    });
    return todo;
  }
}
