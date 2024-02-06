import { useEffect } from "react";
import { API_OPTION, TMDB_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

const useMovies = (endUrl, movieType, genreId, languages) => {
  const dispatch = useDispatch();
  let apiUrl = `${TMDB_API_URL}/discover/movie?language=en-US&page=1&adult=true`;
  if (genreId) {
    apiUrl += `&with_genres=${genreId}`;
  }
  if (languages) {
    apiUrl += `&with_original_language=${languages}`;
  }

  const movieApi = async () => {
    const data = await fetch(apiUrl, API_OPTION);
    const json = await data.json();
    dispatch(addMovies({ movieType, movieData: json.results }));
  };

  useEffect(() => {
    movieApi();
  }, []);
};
export default useMovies;
