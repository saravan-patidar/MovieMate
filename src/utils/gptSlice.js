import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieName: null,
  },
  reducers: {
    toggleGptPage: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieName, gptMovies } = action.payload;
      state.movieName = movieName;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleGptPage, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
