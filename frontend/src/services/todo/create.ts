import { api } from "../../providers/api";
import { TodoType } from "../../types/todo";

interface CreateTodo {
  name: string;
  description: string;
}

export async function create({
  name,
  description,
}: CreateTodo): Promise<TodoType> {
  const { data: todo } = await api.post<TodoType>("/todo", {
    name,
    description,
  });
  return todo;
}
