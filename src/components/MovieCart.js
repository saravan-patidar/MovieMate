import { CDN_API } from "../utils/constants";

const MovieCart = ({ poster }) => {
  // console.log(poster);
  return (
    <div>
      <img src={CDN_API + poster} alt="movie" className="w-40" />
    </div>
  );
};

export const withTrending = (MovieCart) => {
  return (props) => {
    const { index } = props;
    return (
      <div className=" relative border">
        <div className="text-[200px] text-white w-full h-full flex justify-start items-center absolute left-0 ">
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
