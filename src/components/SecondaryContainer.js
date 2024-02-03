import { useSelector } from "react-redux";
import MovieListCont from "./MovieListCont";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div>
      <MovieListCont title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieListCont title={"Trending"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};
export default SecondaryContainer;
/**
 * secondary container
 *    movieList cont
 *      - title
 *      - cards *n
 */
