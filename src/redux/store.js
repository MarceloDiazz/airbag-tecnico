import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import registration from "./registration";
import products from "./products";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  reducer: {
    logger: registration,
    cars: products,
  },
});

export default store;
