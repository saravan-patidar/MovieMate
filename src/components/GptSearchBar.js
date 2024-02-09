import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTION } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const SearchTextRef = useRef(null);
  const dispatch = useDispatch();

  const searchGptDataFromTmdb = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchText = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      SearchTextRef?.current?.value +
      ". Only give me name of 5 movies, comma seperated like the example given ahead. Example  result : Gadar,Don,Golmaal, Hera Pheri, Dhamaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // return <Error />;
    }
    // console.log(gptResults?.choices[0]?.message?.content);
    const movieName = gptResults?.choices[0]?.message?.content.split(",");
    const moviesResult = movieName.map((movie) => searchGptDataFromTmdb(movie));
    const gptMovies = await Promise.all(moviesResult);
    dispatch(addGptMovies({ movieName: movieName, gptMovies: gptMovies }));
  };
  return (
    <div className="w-full pt-14 px-1 md:pt-24 md:w-2/3 m-auto">
      <form
        className="p-1 grid grid-cols-12 bg-white  shadow-slate-800 shadow-md rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchTextRef}
          className="col-span-10 md:col-span-9 bg-black  font-semibold text-white p-2 rounded-l"
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button
          className="col-span-2 md:col-span-3 font-bold bg-red-500 md:p-2 rounded-r"
          onClick={handleGptSearchText}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
