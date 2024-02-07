import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptPage: (state, action) => {
      state.showGptSearch = !showGptSearch;
    },
  },
});

export const { toggleGptPage } = gptSlice.actions;
export default gptSlice.reducer;
