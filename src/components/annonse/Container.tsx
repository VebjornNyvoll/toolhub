interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="container flex h-4/5 w-full animate-from-bottom flex-col items-center justify-start rounded-t-2xl bg-white py-12 px-16 opacity-[0%] shadow-sm">
      <h1 className="mb-6 self-start font-sofia text-2xl font-semibold">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Container;
