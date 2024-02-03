import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute h-full aspect-video text-white p-20 py-60 bg-black bg-opacity-30  w-screen ">
      <h1 className="font-bold text-6xl p-2">{title}</h1>
      <p className="p-2  w-2/5">{overview}</p>
      <div className="flex">
        <button className="p-2 px-5 rounded-lg font-bold text-lg bg-white text-black m-2 hover:bg-opacity-80 flex items-center gap-2">
          <FaPlay />
          Play
        </button>
        <button className="p-2 px-5 rounded-lg font-bold text-lg bg-gray-600 bg-opacity-70 m-2 text-white hover:bg-opacity-85 flex items-center gap-2">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
