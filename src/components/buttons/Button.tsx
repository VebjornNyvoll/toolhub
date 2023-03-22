import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  UserCircleIcon,
  HeartIcon,
  PlusIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  QueueListIcon,
  ArchiveBoxIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export enum IconOptions {
  UserCircle = "UserCircle",
  Heart = "Heart",
  Plus = "Plus",
  Wrench = "Wrench",
  Bolt = "Bolt",
  QueueList = "QueueList",
  Archive = "Archive",
  Calendar = "Calendar",
}

export enum ColorOptions {
  white = "white",
  black = "black",
}
interface ButtonProps {
  text?: string;
  icon?: IconOptions;
  flex?: boolean;
  square?: boolean;
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
  square,
  flex,
}) => {
  return (
    <button
      className={`font-regular hover:shadow-m } z-10 flex flex-row items-center justify-center
       ${
         !square ? "rounded-full py-[0.4rem]" : "rounded-md py-[0.7rem]"
       } px-[1rem] shadow-sm transition-all
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
        <PlusIcon className="h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Wrench ? (
        <WrenchScrewdriverIcon className="h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Bolt ? (
        <BoltIcon className="h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.QueueList ? (
        <QueueListIcon className="h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Archive ? (
        <ArchiveBoxIcon className="mb-[3px] h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Calendar ? (
        <CalendarIcon className="mb-[4px] h-6 w-6" strokeWidth={1.5} />
      ) : null}
      {text ? <p className="ml-2">{text}</p> : null}
    </button>
  );
};

export default Button;
