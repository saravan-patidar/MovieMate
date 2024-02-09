import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp } from "react-icons/fa";
import { CDN_API } from "../utils/constants";
import getGenresName from "../utils/getGenresName";

const MovieCardHover = ({ movie, position }) => {
  if (!movie) return null;
  const { title, genre_ids, release_date, poster_path, vote_average } = movie;
  const year = release_date && release_date.split("-")[0];
  const genresName = getGenresName(genre_ids);

  const handleStyle = {
    left: position.left - 60,
    right: position.right,
    top: position.top - 80,
    bottom: position.bottom,
  };

  return (
    <div
      className=" w-[260px] h-[340px] rounded-lg m-auto my-10 bg-black text-white absolute  z-[999] hover-container"
      style={handleStyle}
    >
      <div className="h-2/4 w-full ">
        <img
          src={CDN_API + poster_path}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between p-1">
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
        <h2 className="font-bold px-3 my-1 text-[15px]">{title}</h2>
        <div className="flex justify-between px-4 ">
          <span className="text-green-400 font-semibold">
            {vote_average.toPrecision(2)} rating
          </span>
          <span className="text-gray-400">{year}</span>
        </div>
        <div className="flex items-center gap-2 m-1 flex-wrap">
          {genresName.map((genre) => (
            <span
              key={genre}
              className="text-sm flex items-center before:mr-1 before:rounded-full before:content-[''] before:bg-gray-500 before:w-2 before:h-2 text-gray-400"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieCardHover;
