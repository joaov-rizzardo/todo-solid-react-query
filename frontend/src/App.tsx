import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { TodoDialog } from "./components/TodoDialog";

export default function App() {
  return (
    <main
      className={`
      w-screen h-screen 
      bg-gradient-to-b from-gray-700 via-gray-900 to-black 
      flex justify-center items-center
      
    `}
    >
      <article className="w-1/2 h-96 rounded-xl bg-emerald-800 bg-opacity-50 backdrop-blur-lg px-4 py-7">
        <div className="flex gap-5 items-center">
          <Input placeholder="Pesquisar..." />
          <TodoDialog />
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <Todo />
        </div>
      </article>
    </main>
  );
}
