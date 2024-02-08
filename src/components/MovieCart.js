import { useState } from "react";
import { CDN_API } from "../utils/constants";

import MovieCardHover from "./MovieCardHover";

const MovieCart = ({ data }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  console.log(data);

  if (!data) return;
  const { poster_path } = data;
  return (
    <div
      className="hover:scale-110 duration-1000 cursor-pointer"
      onMouseOver={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      {/* <img
        src={CDN_API + poster_path}
        alt="movie"
        className="w-44 rounded-lg"
      /> */}
      {/* <MovieCardHover /> */}
    </div>
  );
};

export const withTrending = (MovieCart) => {
  return (props) => {
    const { index } = props;
    return (
      <div className=" relative border-gray-900 border rounded-lg">
        <div className="tr-number text-[200px] text-white w-full h-full flex justify-start items-center absolute left-0 ">
          {index}
        </div>
        <div className="w-32 ml-auto relative ">
          <MovieCart {...props} />
        </div>
      </div>
    );
  };
};

export default MovieCart;
