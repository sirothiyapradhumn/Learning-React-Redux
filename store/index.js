import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";
import cartItemReducer from "./slices/cartItemSlice";
import productReducer from "./slices/productSlice";


const reducer = {
  products: productReducer,
  cartItem: cartItemReducer,
  wishList: wishlistReducer,
};

export const store = configureStore({ reducer });
