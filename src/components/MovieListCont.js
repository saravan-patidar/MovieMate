import MovieCart, { withTrending } from "./MovieCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

const MovieListCont = ({ type, title, movies }) => {
  const TopTrending = withTrending(MovieCart);
  //   console.log(movies);
  return (
    movies && (
      <div className="ml-10">
        <h2 className="text-white text-2xl font-semibold py-1 m-1">{title}</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={7}
          slidesPerGroup={1}
          navigation={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="flex overflow-visible"
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              className={`${
                type === "trending" ? "w-52" : "w-28 md:w-36"
              } cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded`}
            >
              {type === "trending" ? (
                <TopTrending index={index} poster={movie.poster_path} />
              ) : (
                <MovieCart poster={movie.poster_path} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default MovieListCont;
