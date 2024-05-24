import { produce } from "immer";
// Action type
const WISH_CART_ADD_ITEM = "wish/addItem";
const WISH_CART_REMOVE_ITEM = "wish/removeItem";

//Action Creator
export const wishCartAddItem = (productData) => {
  return { type: WISH_CART_ADD_ITEM, payload: productData };
};

export const wishCartRemoveItem = (productID) => {
  return { type: WISH_CART_REMOVE_ITEM, payload: { productID } };
};

// Reducer
export default function wishlistReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.productID === action.payload.productID
    );

    switch (action.type) {
      case WISH_CART_ADD_ITEM:
        state.push(action.payload);
        break;
      case WISH_CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
        break;
    }
    return state;
  })

}
