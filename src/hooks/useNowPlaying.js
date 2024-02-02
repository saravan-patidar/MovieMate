import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPlayingMovie } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    movieApi();
  }, []);
  const movieApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPlayingMovie(json.results));
  };
};
export default useNowPlaying;
