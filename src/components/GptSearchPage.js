import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearchPage;
