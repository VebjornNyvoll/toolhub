//import Image from "next/image";

interface AdProps {
  name: string;
  price: number;
  imgSrc: string;
  category: string;
}

const Ad = () => {
  return (
    <div className=" m-4 hover:translate-y-[-2px]">
      {/*<p className=" h-48 w-48 rounded-2xl bg-white">-bilde-</p>
      <Image src={""} alt={"Hei"} width={250} height={300} /> */}
      <img className="h-48 w-48 rounded-2xl"></img>
      <p className="ml-4 mt-1 w-48 text-sm">-navn- </p>
      <p className="ml-4 w-48 text-xs text-gray-400">-pris- </p>
    </div>
  );
};

export default Ad;
