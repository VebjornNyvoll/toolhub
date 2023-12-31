import { NextPage } from "next";
import Ad from "../components/ad/Ad";
import Button, { ColorOptions } from "../components/buttons/Button";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import Searchbar from "../components/searchbar/Searchbar";


const ToolFeed: NextPage = () => {
  const router = useRouter();
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    router.push({pathname: "/annonser", query: {searchInput: target.search.value}});
  };
  let selectedCategory = router.query.categoryName as string;
 

   //importere liste med kategorier som vi kan iterere gjennom til knappene 
  let adsByFilter = api.advertisement.getManyByCategory.useQuery({categoryName: selectedCategory}).data || [];
  let advertisements = api.advertisement.getAll.useQuery().data || [];
  let foundText = selectedCategory;
  let amountOfAds = adsByFilter.length;
  let amountOfAdsText = "Fant " + amountOfAds + " annonser med gjeldende filtre";
  let adsBySearch = api.advertisement.getManyBySearch.useQuery({searchInput: router.query.searchInput as string}).data || [];

  if (!selectedCategory) {
    selectedCategory = "";
  }
  // Dersom brukeren har trykket på knappen "alle", skal alle annonser vises
  if (selectedCategory === "alle") {
    adsByFilter = advertisements;
    foundText = "alle verktøy";
    amountOfAds = adsByFilter.length;
    amountOfAdsText = "Fant " + amountOfAds + " annonser med gjeldende filtre";
  }
  // Ved bruk av søkefeltet settes selectedCategory til "" og vi må sjekke om det er noen annonser som matcher søket
  else if (selectedCategory === ""){
    adsByFilter = adsBySearch;
    // foundText = "Fant " + adsByFilter.length + " resultater med valgte filtre";
    foundText = "annonser med " + router.query.searchInput + " i tittelen";
    amountOfAds = adsByFilter.length;
    amountOfAdsText = "Fant " + amountOfAds + " annonser med gjeldende filtre";
    // Dersom det ikke er noen annonser som matcher søket, skal alle annonser vises
    if (adsByFilter.length === 0 || adsByFilter === undefined) {
      adsByFilter = advertisements;
      foundText = "annonser med " + router.query.searchInput + " i tittelen";
      amountOfAds = adsByFilter.length;
      amountOfAdsText = "Fant ingen annonser innenfor gjeldende søk: '" + router.query.searchInput + "', viser derfor alle annonser";
    }
  }
  

  return (
    <>
      <Head>
        <title>Toolhub | Annonser</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-100">
        <Navbar />
        <section className="mt-40 flex flex-col gap-5 px-[120px]">
          <p className="font-futura text-2xl">
            Se gjennom <span className="text-emerald-700">{foundText}</span>
          </p>
          <form onSubmit={handleSearchSubmit}>
            <Searchbar />
          </form>
          <p className="font-futura text-md text-gray-400">{amountOfAdsText}</p>
          <div className="mt-5 flex max-w-full flex-row flex-wrap gap-[0.2rem]">
            {adsByFilter?.map((ad) => (
              <Ad key={ad.id} title={ad.title} price={ad.price} id={ad.id} imgSource={ad.image}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ToolFeed;
