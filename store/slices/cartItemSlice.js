import { produce } from "immer";

// Action type
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const INC_ITEM_QUANTITY = "cart/addQuantity";
const DEC_ITEM_QUANTITY = "cart/DecQuantity";

//Action Creator
export const cartAddItem = (productData) => {
  return { type: CART_ADD_ITEM, payload: productData };
};
export const cartRemoveItem = (productID) => {
  return { type: CART_REMOVE_ITEM, payload: { productID } };
};
export const incItemQuantity = (productID) => {
  return { type: INC_ITEM_QUANTITY, payload: { productID } };
};
export const decItemQuantity = (productID) => {
  return { type: DEC_ITEM_QUANTITY, payload: { productID } };
};

// Reducer
export default function cartItemReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.productID === action.payload.productID
    );

    switch (action.type) {
      case CART_ADD_ITEM:
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
        break;
      case INC_ITEM_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;
      case DEC_ITEM_QUANTITY:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
        break;
    }
    return state;
  })
}
