import { createSlice } from "@reduxjs/toolkit";

const findIndex = (state, action) =>
  state.list.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchCartitem(state) {
      state.loading = true;
    },
    fetchCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loadCartItem(state, action) {
      state.loading = false;
      state.list = action.payload.products;
    },
    cartAddItem(state, action) {
      state.list.push({ ...action.payload, quantity: 1 });
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findIndex(state, action);
      state.list.splice(existingItemIndex, 1);
    },
    incItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      state.list[existingItemIndex].quantity += 1;
    },
    decItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0) {
        state.list.splice(existingItemIndex, 1);
      }
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  incItemQuantity,
  decItemQuantity,
  loadCartItem,
  fetchCartError,
  fetchCartitem,
} = slice.actions;

export default slice.reducer;
