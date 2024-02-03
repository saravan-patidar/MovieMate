import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log(movies);
  return <div></div>;
};
export default SecondaryContainer;
