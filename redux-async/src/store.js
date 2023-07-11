import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import pokemonReducer from "./reducers/pokemonSlice";
import productReducer from "./reducers/productsSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
