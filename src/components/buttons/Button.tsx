import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  UserCircleIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export enum IconOptions {
  UserCircle = "UserCircle",
  Heart = "Heart",
  Plus = "Plus",
}

export enum ColorOptions {
  white = "white",
  black = "black",
}
interface ButtonProps {
  text?: string;
  icon?: IconOptions;
  flex?: boolean;
  onClick?: () => void;
  color: ColorOptions;
  className?: string;
}

const ColorCombinations = {
  background: {
    [ColorOptions.white]: "bg-white",
    [ColorOptions.black]: "bg-black",
  },
  text: {
    [ColorOptions.white]: "text-black",
    [ColorOptions.black]: "text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  color,
  flex,
}) => {
  return (
    <button
      className={`font-regular hover:shadow-m } flex flex-row items-center justify-center
       rounded-full px-[1.1rem] py-[0.4rem] shadow-sm transition-all
       hover:translate-y-[-2px] ${flex ? "w-full" : ""} ${
        ColorCombinations.text[color]
          ? ColorCombinations.text[color]
          : "bg-white"
      } ${ColorCombinations.background[color]}`}
      onClick={onClick}
    >
      {icon === IconOptions.UserCircle ? (
        <UserCircleIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Heart ? (
        <HeartIcon className="h-[26px] w-[26px]" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Plus ? (
        <PlusIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {text ? <p className="ml-2">{text}</p> : null}
    </button>
  );
};

export default Button;
