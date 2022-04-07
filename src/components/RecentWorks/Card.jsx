import { BiTimeFive } from "react-icons/bi";

const Card = ({ title, duration, link}) => {

  return (
    <div className="videoCards overflow-hidden rounded-lg w-10/12  cursor-pointer m-auto h-full border border-gray-700">

        {/* <img src={preview} alt="Video Section"/> */}
        <div className="gradientBar h-0.5"></div>

      <div
        className="cardColor dark:bg-gray-800 w-full p-4 h-full"
        
      >
        <p className="gradientText text-md font-medium flex flex-row ">
        <span className=" text-base text-gray-400 mt-1 mr-1">
        <BiTimeFive />
        </span>
            
        {duration}</p>
        <p className="text-gray-300  font-light text-sm mb-10 mt-2">
          {title}
        </p>
        <span className="text-white top-10 flex justify-center">
          <button className="gradientRed text-white px-3 py-2 rounded-sm flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <a href={link} className="no-underline" >
              Watch video
            </a>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;