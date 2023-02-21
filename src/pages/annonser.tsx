import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Annonser: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toolhub | Annonser</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <Navbar />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
};

export default Annonser;
