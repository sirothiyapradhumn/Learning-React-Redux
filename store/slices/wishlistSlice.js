import { createSlice } from "@reduxjs/toolkit";

const findIndex = (state, action) => state.findIndex(
  (cartItem) => cartItem.productID === action.payload.productID
);

const slice = createSlice({
  name: 'wish',
  initialState: [],
  reducers: {
    wishCartAddItem(state, action) {
      state.push(action.payload);
    },
    wishCartRemoveItem(state, action) {
      const existingItemIndex = findIndex(state, action);
      state.splice(existingItemIndex, 1);
    }
  }
});

export const { wishCartAddItem, wishCartRemoveItem } = slice.actions;

export default slice.reducer;