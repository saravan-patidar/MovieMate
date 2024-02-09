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
          spaceBetween={18}
          slidesPerView="auto"
          slidesPerGroup={1}
          navigation={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className=" flex overflow-visibleF "
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              style={{ width: type === "trending" ? "14rem" : "8rem " }}
              className=" flex-grow-0 flex-shrink-0  rounded my-2 overflow-hidden"
            >
              {type === "trending" ? (
                <TopTrending index={index + 1} data={movie} />
              ) : (
                <MovieCart data={movie} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default MovieListCont;
