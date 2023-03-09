import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Searchbar from "../components/searchbar/Searchbar";
import Button, {
  IconOptions,
  ColorOptions,
} from "../components/buttons/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { api } from "../utils/api";

import router from "next/router";
import InputField from "../components/inputs/InputField";

const Home: NextPage = () => {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    // console.log(target.search.value);
    router.push({pathname: "/annonser", query: {searchInput: "Hammer"}});
  };
  return (
    <>
      <Head>
        <title>Toolhub</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/../../public/screwdriver.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-100">
        <Navbar />

        <section className="justify-cente mx-32 mt-60 flex flex-col">
          <p className="max-w-xs font-sofia text-8xl font-bold text-emerald-700">
            LEI UTSTYR
          </p>
          <form onSubmit={(e) => handleSearchSubmit(e)}>
            <Searchbar
              name="search"
              placeholder="Søk etter verktøy!"
              defaultValue=""
            />
          </form>
          
          <div className="mb-8 flex gap-2">
            <Button
              color={ColorOptions.white}
              icon={IconOptions.QueueList}
              onClick={() => void router.push({pathname: "/annonser", query: {categoryName: "alle"}})} // Sender "" for å få alle annonser
              text="Alle verktøy"
              square={true}
            />
            <Button
              color={ColorOptions.white}
              icon={IconOptions.Wrench}
              onClick={() => void router.push({pathname: "/annonser", query: {categoryName: "Håndverktøy"}})}
              text="Håndverktøy"
              square={true}
            />
            <Button
              color={ColorOptions.white}
              icon={IconOptions.Bolt}
              onClick={() => void router.push({pathname: "/annonser", query: {categoryName: "Elektroverktøy"}})}
              text="Elektroverktøy"
              square={true}
            />
          </div>
          <p
            className="text-md mt-[-0.5rem] cursor-pointer text-emerald-700"
            onClick={() => void router.push("/ny-annonse")}
          >
            Eller lag en ny annonse
          </p>
        </section>
        <div className="invisible absolute bottom-0 right-12 z-0 xl:visible">
          <svg
            width="807"
            height="573"
            viewBox="0 0 807 673"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 403.5C0 180.653 180.653 0 403.5 0C626.347 0 807 180.653 807 403.5V673H0V403.5Z"
              fill="#047857"
            />
          </svg>
        </div>
      </main>
    </>
  );
};

export default Home;
