import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const Searchbar = () => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(evt.currentTarget.value);
//   };

//   return (
//     <div className=" z-10 my-4 flex max-w-md gap-4 rounded-lg bg-white p-5 text-lg text-stone-900 shadow-md">
//       <MagnifyingGlassIcon className="h-7 w-7" strokeWidth={1.5} />
//       <input
//         className="w-full outline-none"
//         type="text"
//         placeholder="Hvilke verktøy ser du etter?"
//         onChange={handleChange}
//         value={searchInput}
//       />
//     </div>
//   );
// };

// export default Searchbar;

interface SearchbarProps {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
}

const Searchbar = ({
  name,
  className,
  type,
  defaultValue,
  placeholder,
}: SearchbarProps) => {
  return (
    <div className=" z-10 my-4 flex max-w-md gap-4 rounded-lg bg-white p-5 text-lg text-stone-900 shadow-md">
      <MagnifyingGlassIcon className="h-7 w-7" strokeWidth={1.5} />
      <input
        type={type ? type : "text"}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        className="w-full outline-none"
      />
    </div>
  );
};

export default Searchbar;

