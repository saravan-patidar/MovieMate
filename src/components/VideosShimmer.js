const VideoShimmer = () => {
  return (
    <div>
      <div className="aspect-video bg-slate-500 pt-4">
        <div className="w-5/6 h-5/6 m-auto p-1 my-12 bg-gray-600 bg-opacity-30 drop-shadow-2xl shadow-slate-800 rounded-md">
          <div className="md:w-[500px] md:h-80 my-12 md:mt-40 mx-8 md:mx-12">
            <div className="w-32 h-8 md:w-[280px] md:mt-10 md:h-16 bg-gray-600 rounded-lg"></div>
            <div className=" w-32 md:w-4/5 my-2 h-2 sm:h-5 bg-gray-600 rounded-lg"></div>
            <div className="w-36 md:w-full my-2 h-2 sm:h-5 bg-gray-600 rounded-lg"></div>
            <div className="w-40 md:w-4/5 my-2 h-2 sm:h-5 bg-gray-600 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListShimmer = () => {
  return (
    <div className="mx-1 md:ml-10 md:p-3 p-2 ">
      <div className="w-20 h-5 md:w-52 md:h-10 mx-2 my-2 rounded-lg bg-gray-600 bg-opacity-20"></div>

      <div className="flex m-3  md:justify-around items-center gap-2 flex-wrap">
        <div className="h-44 md:h-52 w-28  md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
      </div>
      <div className="flex m-3 md:justify-around items-center gap-2 flex-wrap">
        <div className="h-44 md:h-52 w-28  md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
        <div className="h-44 md:h-52  w-28 md:w-40 bg-gray-600 bg-opacity-30 rounded-lg p-2">
          <div className="w-full h-full  border border-gray-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export { ListShimmer };
export default VideoShimmer;
