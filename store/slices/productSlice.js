import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    updateAllProduct(state, action) {
      return action.payload;
    },
  },
});

export const { updateAllProduct } = slice.actions;
export default slice.reducer;
