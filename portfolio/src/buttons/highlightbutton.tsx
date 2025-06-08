function HighlightButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="bg-gradient-to-br from-primary to-[#E46400] text-white font-bold py-2  font-lato lg:px-6 px-3 text-sm rounded-xl hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default HighlightButton;