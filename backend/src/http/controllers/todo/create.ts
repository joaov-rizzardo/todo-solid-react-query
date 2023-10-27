import { Request, Response } from "express";
import { CreateBody } from "./types/create-body";
import { MongooseTodoRepository } from "../../../repositories/mongoose/mongoose-todo-repository";
import { CreateTodoUseCase } from "../../../use-cases/todo/create-todo-use-case";

export async function create(req: Request, res: Response) {
  try {
    const { name, description }: CreateBody = req.body;
    const todoRepository = new MongooseTodoRepository();
    const useCase = new CreateTodoUseCase(todoRepository);
    const todo = await useCase.execute({ name, description });
    return res.status(201).send(todo.toObject());
  } catch (error: any) {
    return res.status(500).send({ message: "Server internal error" });
  }
}
