function OutlinedButton({
    onClick,
    children,
    type = "button",
} : {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}){
  return (
    <button
        className="border-2 border-text text-text md:text-sm font-bold py-2 px-6 md:px-3 rounded-xl hover:bg-text hover:text-white hover:cursor-pointer transition-colors duration-300"
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
  );
}

export default OutlinedButton;