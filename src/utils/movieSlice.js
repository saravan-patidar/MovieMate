import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    moviesTrailer: null,
  },
  reducers: {
    addPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailers: (state, action) => {
      state.moviesTrailer = action.payload;
    },
  },
});
export const { addPlayingMovie, addMovieTrailers } = movieSlice.actions;
export default movieSlice.reducer;
