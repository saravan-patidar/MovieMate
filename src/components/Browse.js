import useMovies from "../hooks/useMovies";
import Header from "./Header";
import MainContainer from "./MainContianer";
import SecondaryContainer from "./SecondaryContainer";
import { MOVIES, TRENDING, TV_SERIES } from "../utils/constants";
import useTopTrending from "../hooks/useTopTrending";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import MovieCardHover from "./MovieCardHover";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const { nowPlaying, popular } = MOVIES;
  const { movies, tv, name } = TRENDING;
  const { TVname, TVpopular } = TV_SERIES;

  useMovies(nowPlaying.endUrl, nowPlaying.type);
  useMovies(popular.endUrl, popular.type);
  useMovies(popular.endUrl, "animation", 16, "");

  useTopTrending(movies.endUrl, movies.type, name);
  useTopTrending(tv.endUrl, tv.type, name);
  useTopTrending(TVpopular.endUrl, TVpopular.type, TVname);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* <MovieCardHover /> */}
    </div>
  );
};
export default Browse;
