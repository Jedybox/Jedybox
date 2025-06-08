function skillWidget({ label, image }: { label: string; image: string }) {
  return (
    <div className="w-full aspect-square flex flex-col items-center justify-center text-center">
      <div className="rounded-full lg:border-6 md:border-3 border-2 border-primary lg:p-4 p-2 mb-2 ">
        <img src={image} alt={label} className="lg:w-9 lg:h-9 w-7 h-7 rounded-md" />
      </div>
      <span className="font-bold text-text md:text-md text-sm">{label}</span>
    </div>
  );
}

export default skillWidget;