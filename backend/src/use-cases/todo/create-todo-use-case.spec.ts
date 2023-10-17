import { Todo } from "../../entities/todo";
import { InMemoryTodoRepository } from "../../repositories/in-memory/in-memory-todo-repository";
import { CreateTodoUseCase } from "./create-todo-use-case";

describe("Create todo use case", () => {
  it("should create todo", async () => {
    const todoRepository = new InMemoryTodoRepository();
    const sut = new CreateTodoUseCase(todoRepository);
    const todo = await sut.execute({
      name: "Limpar case",
      description: "Devo limpar a casa",
    });
    expect(todo).toBeInstanceOf(Todo);
    const todos = await todoRepository.findAll();
    expect(todos).toHaveLength(1);
  });
});
