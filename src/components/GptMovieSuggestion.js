import { useSelector } from "react-redux";
import MovieListCont from "./MovieListCont";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, movieName } = gpt;
  if (!gptMovies) return null;
  return (
    <div>
      <div>
        {movieName.map((movie, index) => (
          <MovieListCont key={movie} title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestion;
