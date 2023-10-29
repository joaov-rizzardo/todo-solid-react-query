import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function IconButton({Icon, ...props}: IconButtonProps){
    return (
        <button className="bg-emerald-500 hover:bg-emerald-600 w-10 h-10 rounded-lg flex justify-center items-center" {...props}>
            <Icon color="#fff" className="w-6 h-6"/>
        </button>
    )
}