import { CDN_API } from "../utils/constants";

const MovieCart = ({ poster }) => {
  console.log(poster);
  return (
    <div className="w-40">
      <img src={CDN_API + poster} alt="movie" />
    </div>
  );
};
export default MovieCart;
