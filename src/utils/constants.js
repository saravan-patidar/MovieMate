export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const CDN_API = "https://image.tmdb.org/t/p/w500";
export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const OPENAI_API = process.env.REACT_APP_OPENAI_API;

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

export const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const MULTI_LANG = [
  { langKey: "en", name: "English" },
  { langKey: "hi", name: "Hindi" },
  { langKey: "sp", name: "Spanish" },
  { langKey: "kor", name: "Korean" },
  { langKey: "russ", name: "Russain" },
  { langKey: "bhoj", name: "Bhojpuri" },
  { langKey: "guj", name: "Gujarati" },
];
