import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./blockSlice";

const store = configureStore({
  reducer: {
    blocks: blockSlice,
  },
});

export default store;
