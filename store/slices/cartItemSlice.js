import { createSlice } from "@reduxjs/toolkit";

const findIndex = (state, action) => state.findIndex(
  (cartItem) => cartItem.productId === action.payload.productId
);

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      state.push({ ...action.payload, quantity: 1 });
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    incItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0) {
        state.splice(existingItemIndex, 1);
      }
    }
  }
})


export const { cartAddItem, cartRemoveItem, incItemQuantity, decItemQuantity } = slice.actions;

export default slice.reducer;