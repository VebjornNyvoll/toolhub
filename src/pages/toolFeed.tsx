import { NextPage } from "next";
import Ad from "../components/ad/Ad";
import Button, { ColorOptions } from "../components/buttons/Button";
import Navbar from "../components/navbar/Navbar";
//import Searchbar from "../components/searchbar/Searchbar";

const ToolFeed: NextPage = () => {
  //importere liste med kategorier som vi kan iterere gjennom til knappene
  return (
    <>
      <main className="flex min-h-screen flex-col bg-gray-100">
        <Navbar />
        <section className="mt-40 flex flex-col px-[120px]">
          <p className="font-futura text-2xl">Søk gjennom -kategori-</p>
          <div className="my-8 flex w-2/4 flex-wrap gap-2">
            <Button color={ColorOptions.white} text="Håndverktøy" />
            <Button color={ColorOptions.white} text="Elektroverktøy" />
            <Button color={ColorOptions.white} text="Hageredskaper" />
            <Button color={ColorOptions.white} text="Sag" />
            <Button color={ColorOptions.white} text="Spiker" />
          </div>
          <p className="font-futura text-md text-gray-400">
            Fant -tall- resultater med valgte filtre
          </p>
          <div className="flex max-w-full flex-row flex-wrap">
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
          </div>
        </section>
      </main>
    </>
  );
};

export default ToolFeed;
