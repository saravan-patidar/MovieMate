import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspectRatio sm:aspect-video text-white px-5 py-24 sm:px-20 sm:py-60 md:px-20 md:py-60 bg-black bg-opacity-30 md:bg-opacity-60 w-full h-full ">
      <h1 className="font-bold text-2xl md:text-6xl p-2">{title}</h1>
      <p className="hidden sm:inline-block p-2 sm:w-full md:w-2/5 text-balance ">
        {overview}
      </p>
      <div className="flex">
        <button className="p-1 md:py-2 md:px-5 rounded-lg font-bold text-sm md:text-lg bg-white text-black m-2 hover:bg-opacity-80 flex items-center md:gap-2">
          <FaPlay className="size-3 md:size-auto" />
          Play
        </button>
        <button className="p-2 md:px-5 rounded-lg font-bold text-lg bg-gray-600 bg-opacity-70 m-2 text-white hover:bg-opacity-85 flex items-center gap-2">
          <FaInfoCircle className="size-3 md:size-auto" />
          <span className="hidden md:inline-block">More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
