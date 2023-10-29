import { CheckIcon } from "@radix-ui/react-icons";
import { IconButton } from "./IconButton";

export function Todo() {
  return (
    <div className="w-full px-3 py-2 border-emerald-700 border-b-2 flex items-center">
      <span className="text-zinc-200 text-base flex-1">Titulo</span>
      <IconButton Icon={CheckIcon} />
    </div>
  );
}
