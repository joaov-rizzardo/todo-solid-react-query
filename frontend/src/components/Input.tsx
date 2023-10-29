import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        className="bg-transparent border-emerald-700 outline-none border-2 rounded-xl px-3 py-2 text-zinc-300 w-full"
        {...props}
        ref={ref}
      />
    );
  }
);
