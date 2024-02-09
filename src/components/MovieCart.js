import { useRef, useState } from "react";
import { CDN_API } from "../utils/constants";
import MovieCardHover from "./MovieCardHover";
import { createPortal } from "react-dom";

const MovieCart = ({ data }) => {
  const refernce = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const handleHover = () => {
    if (data !== null) {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
        setHovered(true);
        if (refernce.current) {
          const triggerRect = refernce.current.getBoundingClientRect();
          const offsetFromTop = triggerRect.top + window.scrollY;
          const positionFromRight = window.innerWidth - triggerRect.right;
          setPosition({
            left: triggerRect.left,
            right: positionFromRight,
            top: offsetFromTop,
            bottom: offsetFromTop,
          });
        }
      }, 700);
    }
  };

  const handleLeave = () => {
    clearTimeout(timeOut);
    setHovered(false);
  };

  if (!data) return null;
  let timeOut;

  const { poster_path } = data;
  return (
    <div
      ref={refernce}
      className="hover:scale-110 duration-1000 cursor-pointer relative"
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src={CDN_API + poster_path}
        alt="movie"
        className="w-24 md:w-44 rounded-lg "
      />
      {hovered &&
        createPortal(
          <MovieCardHover movie={data} position={position} />,
          document.body
        )}
    </div>
  );
};

export const withTrending = (MovieCart) => {
  return (props) => {
    const { index } = props;
    return (
      <div className=" md:w-auto relative border-gray-900 border rounded-lg">
        <div className="tr-number text-[100px] md:text-[200px] text-white w-full h-full flex justify-start items-center absolute left-0 ">
          {index}
        </div>
        <div className="w-24 md:w-32 ml-auto relative ">
          <MovieCart {...props} />
        </div>
      </div>
    );
  };
};

export default MovieCart;
