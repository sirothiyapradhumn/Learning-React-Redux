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
export default function cartItemReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, {...action.payload, quantity: 1}];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productID !== action.payload.productID
      );
    case INC_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.productID === action.payload.productID) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case DEC_ITEM_QUANTITY:
      return state.map((item) => {
          if (item.productID === action.payload.productID) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }).filter((item) => item.quantity > 0);
    default:
      return state;
  }
}
