import { useEffect } from "react";
import { API_OPTION, TMDB_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPlayingMovie } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    movieApi();
  }, []);
  const movieApi = async () => {
    const data = await fetch(TMDB_API_URL + "now_playing?", API_OPTION);
    const json = await data.json();
    dispatch(addPlayingMovie(json.results));
  };
};
export default useNowPlaying;
