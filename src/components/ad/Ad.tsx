//import Image from "next/image";
import { useRouter } from "next/router";

interface AdProps {
  title: string;
  price: number;
  id: string;
}

const Ad = ({ title, price, id }: AdProps) => {
  const router = useRouter();

  return (
    <div
      className=" m-4 hover:translate-y-[-2px]"
      onClick={() => void router.push(`/annonser/${id}`)}
    >
      <div className="h-48 w-48 rounded-2xl bg-white shadow-sm"></div>
      <p className="text-md ml-4 mt-3 w-48">{title}</p>
      <p className="ml-4 w-48 text-sm text-gray-400">{price}</p>
    </div>
  );
};

export default Ad;
