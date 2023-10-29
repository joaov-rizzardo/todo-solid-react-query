import { useQuery } from "react-query";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { TodoDialog } from "./components/TodoDialog";
import { findAll } from "./services/todo/find-all";
import { useState } from "react";
import { TodoType } from "./types/todo";

const sortTodos = (a: TodoType, b: TodoType) => {
  if (a.completed) {
    return 1;
  } else if (b.completed) {
    return -1;
  } else {
    return 0;
  }
};

export default function App() {
  const { data: todos } = useQuery("todos", findAll);
  const [search, setSearch] = useState<string>("");

  return (
    <main
      className={`
      w-screen h-screen 
      bg-gradient-to-b from-gray-700 via-gray-900 to-black 
      flex justify-center items-center
    `}
    >
      <article className="w-1/2 h-96 rounded-xl bg-emerald-900 bg-opacity-50 backdrop-blur-lg px-4 py-7">
        <div className="flex gap-5 items-center">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar..."
          />
          <TodoDialog />
        </div>
        <div className="flex flex-col gap-3 mt-5 overflow-y-scroll h-64">
          {todos &&
            todos.sort(sortTodos).flatMap((todo) => {
              if (
                search !== "" &&
                !todo.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return false;
              }
              return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
      </article>
    </main>
  );
}
