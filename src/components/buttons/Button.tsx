import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  UserCircleIcon,
  HeartIcon,
  PlusIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export enum IconOptions {
  UserCircle = "UserCircle",
  Heart = "Heart",
  Plus = "Plus",
  Wrench = "Wrench",
  Bolt = "Bolt",
}

interface ButtonProps {
  text?: string;
  icon?: IconOptions;
  onClick?: () => void;
  width?: number;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  width,
  color,
}) => {
  return (
    <button
      className={`font-regular flex flex-row items-center justify-center ${
        width ? `w-[${width}rem]` : ""
      } rounded-full ${
        color ? `bg-${color}` : "bg-white"
      } hover:shadow-m px-[1.1rem] py-[0.4rem] text-black shadow-sm transition-all hover:translate-y-[-2px]`}
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
      {icon === IconOptions.Wrench ? (
        <WrenchScrewdriverIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Bolt ? (
        <BoltIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {text ? <p className="ml-2">{text}</p> : null}
    </button>
  );
};

export default Button;
