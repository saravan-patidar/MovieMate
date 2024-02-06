import MovieCart, { withTrending } from "./MovieCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../style.css";

const MovieListCont = ({ type, title, movies }) => {
  const TopTrending = withTrending(MovieCart);
  return (
    movies && (
      <div className="ml-10 p-3">
        <h2 className="text-white text-2xl font-semibold py-1 m-1">{title}</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView="auto"
          slidesPerGroup={1}
          navigation={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className=" flex overflow-visible"
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              style={{ width: type === "trending" ? "14rem" : "8rem " }}
              className=" cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded my-2"
            >
              {type === "trending" ? (
                <TopTrending index={index + 1} poster={movie.poster_path} />
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
