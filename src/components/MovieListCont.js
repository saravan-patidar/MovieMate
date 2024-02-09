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
      <div className="mx-1 md:ml-10 md:p-3 p-2">
        <h2 className="text-white sm:text-2xl font-semibold md:py-1 m-1">
          {title}
        </h2>

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
          {movies.map(
            (movie, index) =>
              movie.poster_path && (
                <SwiperSlide
                  key={movie.id}
                  // style={{
                  //   // width: type === "trending" ? "14rem" : "8rem ",
                  //   marginRight: "0px",
                  // }}
                  className={`${
                    type === "trending" ? "trendcss " : "slide "
                  }  flex-grow-0 flex-shrink-0  rounded md:my-2 overflow-hidden `}
                >
                  {type === "trending" ? (
                    <TopTrending index={index + 1} data={movie} />
                  ) : (
                    <MovieCart data={movie} />
                  )}
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    )
  );
};

export default MovieListCont;
