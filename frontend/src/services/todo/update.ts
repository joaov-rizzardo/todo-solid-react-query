import { api } from "../../providers/api";
import { TodoType } from "../../types/todo";

interface UpdateTodo {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export async function update({
  id,
  name,
  description,
  completed,
}: UpdateTodo): Promise<TodoType> {
  const { data: todo } = await api.put<TodoType>("/todo", {
    id,
    name,
    description,
    completed,
  });
  return todo;
}
