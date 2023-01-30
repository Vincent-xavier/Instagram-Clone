import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../theme/themeSlice";

const Store = configureStore({
  reducer: themeSlice,
  devTools: true,
});

export default Store;
