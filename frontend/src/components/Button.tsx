import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className, ...props }: IconButtonProps) {
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 text-zinc-200 h-10 rounded-lg flex justify-center items-center ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
