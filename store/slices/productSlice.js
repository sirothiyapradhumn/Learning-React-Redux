import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchProduct(state) {
      state.loading = true;
    },
    fetchProductError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateAllProduct(state, action) {
      state.loading = false;
      state.error = '',
      state.list =  action.payload;
    }
  },
});

export const getAllProducts = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.loading;
export const getProductError = (state) => state.products.error;

export const { updateAllProduct, fetchProduct, fetchProductError } = slice.actions;
export default slice.reducer;
