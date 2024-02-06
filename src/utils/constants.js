export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjIwZGI3NGY0OWNmN2YyODg1ZjZkZWEwNmNhMmQ2ZSIsInN1YiI6IjY1YmNjYTRjZjAzMTc0MDE0OTY2ZTQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xR6-gIG_Ky10p9NFf34racmRL_NeiH7o0pUGKsuD8VE",
  },
};

export const CDN_API = "https://image.tmdb.org/t/p/w500";
export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const MOVIES = {
  nowPlaying: {
    endUrl: "now_playing",
    type: "nowPlayingMovies",
  },
  popular: {
    endUrl: "popular",
    type: "popular",
  },
};

export const TRENDING = {
  name: "trending",
  movies: {
    endUrl: "movie/day",
    type: "trendingMovie",
  },
  tv: {
    endUrl: "tv/day",
    type: "trendingTV",
  },
};

export const TV_SERIES = {
  TVname: "tv",
  TVpopular: {
    endUrl: "popular",
    type: "TVpopular",
  },
  rated: {
    endUrl: "top_rated",
    type: "TVrated",
  },
};
