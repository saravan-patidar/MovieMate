import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieInfo = useSelector((store) => store.movies?.moviesTrailer);
  return (
    <div className=" md:-m-1 w-full ">
      <iframe
        className="w-full object-cover aspectRatio sm:aspect-video "
        src={`https://www.youtube.com/embed/${movieInfo?.key}?autoplay=1&mute=1;&controls=0;&showinfo=0;&rel=0;&iv_load_policy=3;&modestbranding=1;&disablekb=1&loop=1&amp;`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
