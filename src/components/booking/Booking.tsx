import {
  CalendarIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface BookingProps {
  title: string;
  renting: boolean;
  renter: string | null | undefined;
  telephone: string | null | undefined;
  subcategory: string | null;
  date: Date;
}

const Booking = ({
  title,
  renting,
  renter,
  subcategory,
  telephone,
  date,
}: BookingProps) => {
  return (
    <div className="flex w-[45rem] flex-col gap-3 rounded-md bg-white py-5 px-6 shadow-sm">
      <div className="flex flex-row justify-between">
        <p className="font-warming text-lg">
          <span className="rounded-md font-medium leading-3 text-white">
            {renting ? (
              <span className="rounded-md bg-orange-500 p-2">
                Du leier ut: {subcategory?.toLowerCase()}
              </span>
            ) : (
              <span className="rounded-md bg-emerald-700 p-2">
                Du leier: {subcategory?.toLowerCase()}
              </span>
            )}
          </span>
          <p className="mt-3">{title}</p>
        </p>
      </div>
      <div className="mt-4 flex flex-row gap-3 self-end">
        <div className="flex flex-row items-center gap-[2px] rounded-full bg-gray-100 px-3 py-1">
          <CalendarIcon className="h-6 w-6 translate-y-[-1px]" />
          <p>Dato: {date.toDateString()}</p>
        </div>
        <div className="flex flex-row items-center gap-[2px] rounded-full bg-gray-100 px-3 py-1">
          <PhoneIcon className="h-5 w-5 translate-y-[-1px]" />
          <p>Tlf: {telephone ? telephone : null}</p>
        </div>
        <div className="flex flex-row items-center gap-[2px] rounded-full bg-gray-100 px-3 py-1">
          <UserCircleIcon className="h-6 w-6 translate-y-[-1px]" />
          <p>
            {renting ? "Leier" : "Utleier"}: {renter}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
