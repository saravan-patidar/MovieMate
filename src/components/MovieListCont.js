import MovieCart from "./MovieCart";

const MovieListCont = ({ title, movies }) => {
  //   console.log(movies);
  return (
    movies && (
      <div>
        <h2>{title}</h2>
        <div className="flex overflow-x-auto ">
          <div className="flex ">
            {movies.map((movie) => (
              <MovieCart key={movie.id} poster={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieListCont;
