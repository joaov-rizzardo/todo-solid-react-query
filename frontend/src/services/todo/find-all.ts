import { api } from "../../providers/api";
import { TodoType } from "../../types/todo";

export async function findAll(): Promise<TodoType[]> {
  const { data: todos } = await api.get<TodoType[]>("/todo");
  return todos;
}
