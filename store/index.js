import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";
import cartItemReducer from "./slices/cartItemSlice";
import productReducer from "./slices/productSlice";
import { logger } from "./middleware/logger";
import { apiMiddleware } from "./middleware/api";
import { func } from "./middleware/func";


const reducer = {
  products: productReducer,
  cartItem: cartItemReducer,
  wishList: wishlistReducer,
};

export const store = configureStore({
  reducer,
  // middleware: () => [func],
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
 });

