import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      const { movieType, movieData } = action.payload;
      state[movieType] = movieData;
    },
    addMovieTrailers: (state, action) => {
      state.moviesTrailer = action.payload;
    },
  },
});
export const { addMovies, addMovieTrailers } = movieSlice.actions;
export default movieSlice.reducer;
