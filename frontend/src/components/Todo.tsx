import { CheckIcon } from "@radix-ui/react-icons";
import { IconButton } from "./IconButton";
import { TodoType } from "../types/todo";
import { useMutation, useQueryClient } from "react-query";
import { update } from "../services/todo/update";

interface TodoProps {
  todo: TodoType;
}

export function Todo({ todo }: TodoProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: update,
    onSuccess: (data) => {
      queryClient.setQueryData<TodoType[] | undefined>(
        "todos",
        (previousData) =>
          previousData?.map((todo) => (todo.id === data.id ? data : todo))
      );
    },
  });

  async function completeTodo() {
    await mutation.mutateAsync({
      ...todo,
      completed: true,
    });
  }

  return (
    <div className="w-full px-3 py-2 border-emerald-700 border-b-2 flex items-center">
      <span
        className={`text-zinc-200 text-base flex-1 ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {todo.name}
      </span>
      {todo.completed === false && (
        <IconButton Icon={CheckIcon} onClick={completeTodo} />
      )}
    </div>
  );
}
