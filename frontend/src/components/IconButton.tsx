import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const IconButton = forwardRef(
  ({ Icon, ...props }: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        className="bg-emerald-500 hover:bg-emerald-600 w-10 h-10 rounded-lg flex justify-center items-center"
        ref={ref}
        {...props}
      >
        <Icon color="#fff" className="w-6 h-6" />
      </button>
    );
  }
);
