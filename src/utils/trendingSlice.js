import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trendingMovie: null,
  },
  reducers: {
    addTrendingMovies: (state, action) => {
      const { trendingType, trendingData } = action.payload;
      state[trendingType] = trendingData.slice(0, 10);
    },
    addTVShow: (state, action) => {
      const { trendingType, trendingData } = action.payload;
      state[trendingType] = trendingData;
    },
  },
});

export const { addTrendingMovies, addTVShow } = trendingSlice.actions;
export default trendingSlice.reducer;
