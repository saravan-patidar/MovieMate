import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="bg-gray-800 pt-48 ">
      <form className="p-2 m-3 grid grid-cols-12">
        <input
          className="col-span-9"
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button className="col-span-3">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
