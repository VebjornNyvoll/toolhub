import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="container flex h-4/5 w-full animate-from-bottom flex-col items-center justify-start rounded-t-2xl bg-white px-[5rem] py-14 opacity-[0%] shadow-sm">
      <h1 className="mb-6 flex flex-row justify-center self-start font-sofia text-2xl font-semibold">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Container;
