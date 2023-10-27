import { Request, Response } from "express";
import { UpdateBody } from "./types/update-body";
import { MongooseTodoRepository } from "../../../repositories/mongoose/mongoose-todo-repository";
import { UpdateTodoUseCase } from "../../../use-cases/todo/update-todo-use-case";

export async function update(req: Request, res: Response) {
  try {
    const { id, name, description, completed }: UpdateBody = req.body;
    const todoRepository = new MongooseTodoRepository();
    const useCase = new UpdateTodoUseCase(todoRepository);
    const todo = await useCase.execute({ id, name, description, completed });
    return res.status(200).send(todo.toObject());
  } catch (error: any) {
    return res.status(500).send({ message: "Server internal error" });
  }
}
