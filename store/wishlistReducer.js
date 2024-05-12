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
export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case WISH_CART_ADD_ITEM:
      return [...state, action.payload];
    case WISH_CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productID !== action.payload.productID
      );
    default:
      return state;
  }
}
