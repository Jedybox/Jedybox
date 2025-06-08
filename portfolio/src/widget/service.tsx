function Service({
    children,
} : {
    children: React.ReactNode;
}) {
  return (
    <div className="xl:w-md lg:w-sm md:w-80 h-80 max-w-lg max-h-80 bg-secondary py-10 px-6 rounded-2xl justify-center items-center flex flex-col lg:gap-4 md:gap-2">
      {children}
    </div>
  );
}

export default Service;
