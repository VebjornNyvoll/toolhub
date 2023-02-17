import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button, { IconOptions } from "../buttons/Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="space-between absolute top-0 flex h-[8rem] w-full flex-row items-center justify-between bg-gray-100 px-[120px]">
      <p
        className="font-warming text-4xl font-extrabold"
        onClick={() => void router.push("/")}
      >
        Toolhub
      </p>
      <div className="flex gap-2">
        <Button
          icon={IconOptions.Plus}
          text={"Ny annonse"}
          onClick={() => void router.push("/ny-annonse")}
        />
        <Button icon={IconOptions.Heart} text={"Varslinger"} />
        <Button
          icon={IconOptions.UserCircle}
          text={sessionData ? "Bruker" : "Sign in"}
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        />
      </div>
    </div>
  );
};

export default Navbar;