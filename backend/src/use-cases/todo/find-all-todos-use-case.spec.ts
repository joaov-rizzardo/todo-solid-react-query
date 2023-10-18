import { Todo } from "../../entities/todo";
import { InMemoryTodoRepository } from "../../repositories/in-memory/in-memory-todo-repository";
import { FindAllTodosUseCase } from "./find-all-todos-use-case";
describe("Find all todos use case", () => {
  it("shoud find all todos", async () => {
    const todoRepository = new InMemoryTodoRepository();
    const sut = new FindAllTodosUseCase(todoRepository);
    const todo = await todoRepository.create({
      name: "Teste",
      description: "Descrição teste",
    });
    const allTodos = await sut.execute();
    expect(allTodos).toHaveLength(1);
    expect(allTodos[0]).toBeInstanceOf(Todo);
  });
});
