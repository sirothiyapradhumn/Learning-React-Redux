import { combineReducers, createStore } from "redux";
import wishlistReducer from "./slices/wishlistSlice";
import cartItemReducer from "./slices/cartItemSlice";
import productReducer from "./slices/productSlice";


const reducer = combineReducers({
  products: productReducer,
  cartItem: cartItemReducer,
  wishList: wishlistReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
