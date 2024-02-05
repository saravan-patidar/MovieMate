import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import trendingReducer from "./trendingSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    trending: trendingReducer,
  },
});

export default appStore;
