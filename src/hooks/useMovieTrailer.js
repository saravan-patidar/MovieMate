import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { addMovieTrailers } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    // const filterData = json.results.filter((video) => (video.type = "Trailer"));
    // console.log(filterData);
    dispatch(addMovieTrailers(json.results[0]));
  };
};
export default useMovieTrailer;
