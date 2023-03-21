//import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { api } from "../../utils/api";

interface AdProps {
  title: string;
  price: number;
  id: string;
}

const Ad = ({ title, price, id }: AdProps) => {
  const router = useRouter();

  const { data: bookedDates } = api.booking.getBookedDates.useQuery(
    {
      advertId: id,
    },
    {
      enabled: !!id,
    }
  );

  const [availableToday, setAvailableToday] = useState(false);

  const bookedDatesArray: number[] | undefined = bookedDates?.map(
    (date: { date: Date }) => {
      return new Date(date.date).getTime();
    }
  );

  useEffect(() => {
    if (bookedDatesArray) {
      if (
        !bookedDatesArray.includes(
          new Date(new Date().toDateString()).getTime()
        )
      ) {
        setAvailableToday(true);
      }
    }
  }, [bookedDatesArray]);

  return (
    <div
      className="flex flex-col justify-start hover:translate-y-[-2px]"
      onClick={() => void router.push(`/annonser/${id}`)}
    >
      {availableToday === true ? (
        <div className="absolute translate-y-[10px] translate-x-[-25px] self-end justify-self-end rounded-full bg-emerald-700 px-2 py-1 text-sm text-white">
          Ledig i dag
        </div>
      ) : null}
      <div className="h-48 w-48 rounded-2xl bg-white shadow-sm"></div>
      <p className="text-md ml-4 mt-3 w-48">{title}</p>
      <p className="ml-4 w-48 text-sm text-gray-400">{price}</p>
    </div>
  );
};

export default Ad;
