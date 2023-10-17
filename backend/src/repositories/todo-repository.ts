import { Todo } from "../entities/todo";

export interface TodoRepository {
  create({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Promise<Todo>;

  update({
    id,
    name,
    description,
    completed,
  }: {
    id: string;
    name: string;
    description: string;
    completed: boolean;
  }): Promise<Todo>;

  delete(id: string): Promise<void>;

  findById(id: string): Promise<Todo>;

  findAll(): Promise<Todo[]>;
}
