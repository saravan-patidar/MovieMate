import { useEffect } from "react";
import { API_OPTION, TMDB_API_URL } from "../utils/constants";
import { addMovieTrailers } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `${TMDB_API_URL}/movie/${movieId}/videos`,
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    // const filterData = json.results.filter((video) => (video.type = "Trailer"));
    // console.log(filterData);
    dispatch(addMovieTrailers(json.results[1]));
  };
};
export default useMovieTrailer;
