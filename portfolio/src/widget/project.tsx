import { useState } from "react";

type ProjectProps = {
  image: string;
  projectname: string;
  discription: string;
  category: string;
  linktoGitHub?: string;
};

const Project: React.FC<ProjectProps> = ({
  image,
  projectname,
  category,
  discription,
  linktoGitHub = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-background/70 z-40 flex items-center justify-center backdrop-blur-sm"
          onClick={toggleExpand}
        />
      )}
      <div
        className={`
                    ${
                      isExpanded
                        ? "fixed top-1/2 left-1/2 z-50 w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] h-fit transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"
                        : "relative lg:w-80 sm:w-[28rem] md:w-[32rem] shadow-lg"
                    }
                    bg-[#252525] rounded-xl transition-all duration-300 ease-in-out cursor-pointer
                `}
        onClick={!isExpanded ? toggleExpand : undefined}
      >
        <div
          className={`xl:h-96 ${
            isExpanded ? "xl:h-2/3 lg:h-96" : "h-80"
          } overflow-hidden flex justify-center items-center rounded-t-xl`}
        >
          <img
            src={image}
            alt={projectname}
            className={`${isExpanded ? "p-10 lg:h-full" : "w-64"} object-fit`}
          />
        </div>
        <div className="font-bold flex flex-row items-center justify-between border-t border-background p-4">
          <h3 className="text-lg font-bold text-[#c6c6c6]">{projectname}</h3>
          <p className="text-sm text-text">{category}</p>
        </div>
        {isExpanded && (
          <p className="text-text text-md font-semibold p-4">{discription}</p>
        )}
        {isExpanded && linktoGitHub && (
          <div className="flex justify-end p-4">
            <a
              href={linktoGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-k2d font-semibold"
            >
              View on GitHub
            </a>
          </div>
        )}
        {isExpanded && (
          <button
            className="absolute top-4 right-4 text-white text-2xl z-60 cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={toggleExpand}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
    </>
  );
};

export default Project;
