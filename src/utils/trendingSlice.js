import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trendingMovie: null,
  },
  reducers: {
    addTrendingMovies: (state, action) => {
      // state.trendingMovie = action.payload;
      const data = action.payload;
      state.trendingMovie = data.slice(0, 10);
    },
  },
});

export const { addTrendingMovies } = trendingSlice.actions;
export default trendingSlice.reducer;
