import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlaying from "../hooks/useNowPlaying";
import { useSelector } from "react-redux";

const MainContainer = () => {
  useNowPlaying();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  console.log(movies[1]);
  const { original_title, overview, id } = movies[1];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
