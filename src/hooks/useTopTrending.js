import { useEffect } from "react";
import { API_OPTION, TMDB_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies, addTVShow } from "../utils/trendingSlice";

const useTopTrending = (endUrl, trendingType, name) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${TMDB_API_URL}/${name}/${endUrl}`, API_OPTION);
      const json = await data.json();
      name === "trending"
        ? dispatch(
            addTrendingMovies({ trendingType, trendingData: json.results })
          )
        : dispatch(addTVShow({ trendingType, trendingData: json.results }));
    };

    fetchData();
  }, [endUrl, trendingType, name, dispatch]);
};
export default useTopTrending;
// https://api.themoviedb.org/3/movie/popular
// "https://api.themoviedb.org/3/movie/now_playing?"
//  https://api.themoviedb.org/3/movie/movieId/videos
// https://api.themoviedb.org/3/trending/movie/day
// https://api.themoviedb.org/3/trending/tv/day
// https://api.themoviedb.org/3/tv/popular
