import { UpdateTodoUseCase } from "./update-todo-use-case";
import { Todo } from "../../entities/todo";
import { InMemoryTodoRepository } from "../../repositories/in-memory/in-memory-todo-repository";

describe("Update todo use case", () => {
  it("should update todo", async () => {
    const todoRepository = new InMemoryTodoRepository();
    const sut = new UpdateTodoUseCase(todoRepository);
    const createdTodo = await todoRepository.create({
      name: "Compras supermercado",
      description: "Fazer compras no supermercado",
    });
    const updatedTodo = await sut.execute({
      id: createdTodo.id,
      name: "Outro nome",
      description: "Outra descrição",
      completed: false,
    });
    expect(updatedTodo).toBeInstanceOf(Todo);
    expect(updatedTodo.id).toEqual(createdTodo.id);
    expect(updatedTodo).not.toEqual(createdTodo);
  });
});
