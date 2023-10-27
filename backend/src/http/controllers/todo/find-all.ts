import { Request, Response } from "express";
import { MongooseTodoRepository } from "../../../repositories/mongoose/mongoose-todo-repository";
import { FindAllTodosUseCase } from "../../../use-cases/todo/find-all-todos-use-case";

export async function findAll(req: Request, res: Response) {
  try {
    const todoRepository = new MongooseTodoRepository();
    const useCase = new FindAllTodosUseCase(todoRepository);
    const todos = await useCase.execute();
    return res.status(200).send(todos.map((todo) => todo.toObject()));
  } catch (error: any) {
    return res.status(500).send({ message: "Server internal error" });
  }
}
