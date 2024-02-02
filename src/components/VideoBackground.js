import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const movieInfo = useSelector((store) => store.movies?.moviesTrailer);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-full object-cover aspect-video"
        // src={`https://www.youtube.com/embed/?autoplay=1&mute=&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        src={`https://www.youtube.com/embed/${movieInfo?.key}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
