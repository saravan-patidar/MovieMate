import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp } from "react-icons/fa";
import { CDN_API } from "../utils/constants";
const MovieCardHover = () => {
  return (
    <div className=" w-[290px] h-[360px] rounded-lg m-auto my-10 bg-black text-white absolute top-3/4 left-1/2  z-[9999]">
      <div className="h-2/4 w-full ">
        <img
          src={CDN_API + "/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg"}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between p-2">
          <div className="flex gap-2">
            <span className="border text-gray-300 hover:text-white border-gray-500 rounded-full p-2 hover:border-white">
              <FaPlay />
            </span>
            <span className="border text-gray-300 hover:text-white border-gray-500 rounded-full p-2 hover:border-white">
              <FaPlus />
            </span>
            <span className="border text-gray-300 hover:text-white border-gray-500 rounded-full p-2 hover:border-white">
              <FaThumbsUp />
            </span>
          </div>
          <span className="border text-gray-300 hover:text-white border-gray-500 rounded-full p-2 hover:border-white">
            <FaChevronDown />
          </span>
        </div>
        <h2 className="font-bold text-lg px-3 my-2">Turning Red</h2>
        <div className="flex justify-between px-6 ">
          <span className="text-green-400 font-semibold">9.7 rating</span>
          <span className="text-gray-400">2024</span>
        </div>
        <div className="flex items-center gap-2 m-2">
          <span className="text-sm flex items-center before:mr-1 before:rounded-full before:content-[''] before:bg-gray-500 before:w-2 before:h-2 text-gray-400">
            Drama
          </span>
          <span className="text-sm flex items-center before:mr-1 before:rounded-full before:content-[''] before:bg-gray-500 before:w-2 before:h-2">
            Dram
          </span>
          <span className="text-sm flex items-center before:mr-1 before:rounded-full before:content-[''] before:bg-gray-500 before:w-2 before:h-2">
            Drama
          </span>
        </div>
      </div>
    </div>
  );
};
export default MovieCardHover;
