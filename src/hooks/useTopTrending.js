import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/trendingSlice";

const useTopTrending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
    console.log(json.results.slice(0, 10));
  };
};
export default useTopTrending;
