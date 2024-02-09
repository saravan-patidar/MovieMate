import { useSelector } from "react-redux";
import MovieListCont from "./MovieListCont";
import "swiper/css";
import "swiper/css/navigation";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const trending = useSelector((store) => store.trending);

  return (
    movies?.nowPlayingMovies && (
      <>
        <div className="bg-black md:-my-40 ">
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
          <MovieListCont
            type="animation"
            title={"Animations Movies"}
            movies={movies?.animation}
          />
          <MovieListCont
            type="trending"
            title={"Top 10 Trending TV Series"}
            movies={trending?.trendingTV}
          />
          <MovieListCont
            type="tv"
            title={"Popular TV Series"}
            movies={trending?.TVpopular}
          />
        </div>
      </>
    )
  );
};
export default SecondaryContainer;
