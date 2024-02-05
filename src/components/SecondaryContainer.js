import { useSelector } from "react-redux";
import MovieListCont, { withTrending } from "./MovieListCont";
import "swiper/css";
import "swiper/css/navigation";
import useTopTrending from "../hooks/useTopTrending";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const trending = useSelector((store) => store.trending);
  // console.log(trendingMovie);
  useTopTrending();
  return (
    <>
      <div className="bg-black">
        <MovieListCont
          type={null}
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieListCont
          type="trending"
          title={"Top 10 Trending Movies"}
          movies={trending?.trendingMovie}
        />
      </div>
    </>
  );
};
export default SecondaryContainer;
