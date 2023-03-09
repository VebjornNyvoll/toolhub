import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Button, { IconOptions, ColorOptions } from "../buttons/Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="space-between absolute top-0 flex h-[8rem] w-full flex-row items-center justify-between bg-gray-100 px-[120px]">
      <p
        className="select-none font-warming text-4xl font-extrabold hover:cursor-pointer"
        onClick={() => void router.push("/")}
      >
        Toolhub
      </p>
      <div className="flex gap-2">
        <Button
          icon={IconOptions.Plus}
          text={"Ny annonse"}
          color={ColorOptions.white}
          onClick={() => void router.push("/ny-annonse")}
        />
        <Button
          icon={IconOptions.Heart}
          text={"Varslinger"}
          color={ColorOptions.white}
          onClick={() => void router.push("/")}
        />
        <Button
          icon={IconOptions.Archive}
          text={"Dine annonser"}
          color={ColorOptions.white}
          onClick={() => void router.push("/egne_annonser")}
        />
        <Button
          icon={IconOptions.UserCircle}
          text={sessionData ? "Bruker" : "Sign in"}
          color={ColorOptions.white}
          onClick={
            sessionData
              ? () => void router.push("/bruker")
              : () => void signIn()
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
