import { useEffect } from "react";
import { API_OPTION, TMDB_API_URL } from "../utils/constants";
import { addMovieTrailers } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `${TMDB_API_URL}/movie/${movieId}/videos`,
        API_OPTION
      );
      const json = await data.json();
      // const filterData = json.results.filter((video) => (video.type = "Trailer"));
      dispatch(addMovieTrailers(json.results[1]));
    };
    fetchData();
  }, [movieId, dispatch]);
};
export default useMovieTrailer;
