import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface SwiperProps {
  children: React.ReactNode[];
}

const Swiper = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const incrementIndex = () => {
    if (selectedIndex < 2) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  const decrementIndex = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedIndex(2);
    }
  };
  return (
    <Tab.Group
      as="div"
      className="relative flex flex-1 flex-col items-center"
      selectedIndex={selectedIndex}
    >
      <Tab.Panels className="h-[17rem] w-full overflow-hidden rounded-md bg-gray-100 p-4">
        <Tab.Panel className="h-full w-full">Image 1</Tab.Panel>
        <Tab.Panel className="h-full w-full">Image 2</Tab.Panel>
        <Tab.Panel className="h-full w-full">Image 3</Tab.Panel>
      </Tab.Panels>
      <Tab.List className="z-10 mt-[-1.5rem] mb-[1.5rem] flex flex-row gap-[0.3rem]">
        <Tab
          className="h-2 w-2 rounded-full bg-emerald-700"
          onClick={() => setSelectedIndex(0)}
          style={selectedIndex == 0 ? { backgroundColor: "white" } : {}}
        />
        <Tab
          className="h-2 w-2 rounded-full bg-emerald-700"
          onClick={() => setSelectedIndex(1)}
          style={selectedIndex == 1 ? { backgroundColor: "white" } : {}}
        />
        <Tab
          className="h-2 w-2 rounded-full bg-emerald-700"
          onClick={() => setSelectedIndex(2)}
          style={selectedIndex == 2 ? { backgroundColor: "white" } : {}}
        />
      </Tab.List>
      <div className="z-1 absolute flex h-full w-full items-center justify-between px-4">
        <div
          className="align-center flex h-6 w-6 cursor-pointer items-center rounded-full bg-black opacity-20 transition-all hover:opacity-100"
          onClick={() => decrementIndex()}
        >
          <ChevronLeftIcon
            className="ml-[0.05rem] h-5 w-5"
            color="white"
            strokeWidth={2}
          />
        </div>
        <div
          className="align-center flex h-6 w-6 cursor-pointer items-center rounded-full bg-black opacity-20 transition-all hover:opacity-100"
          onClick={() => incrementIndex()}
        >
          <ChevronRightIcon
            className="ml-[0.2rem] h-5 w-5"
            color="white"
            strokeWidth={2}
          />
        </div>
      </div>
    </Tab.Group>
  );
};

export default Swiper;
