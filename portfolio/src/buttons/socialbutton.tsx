function SocialButton({
  icon,
  onClick,
}: {
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      className="p-2 flex justify-center bg-[#1e1c1b] rounded-full border-1 border-[#bababa] hover:cursor-pointer sm:mb-6"
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
    </button>
  );
}

export default SocialButton;