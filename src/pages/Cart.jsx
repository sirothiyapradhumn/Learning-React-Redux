import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { getAllCartItems, getCartError, getCartLoadingState } from "../../store/slices/cartItemSlice";

export default function Cart() {
  const cartItems = useSelector(getAllCartItems);
  const cartLoading = useSelector(getCartLoadingState);
  const cartError = useSelector(getCartError);

  const totalItemPrice = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartLoading ? (
          <div className="spinner" />
        ) : cartError ? <div>{cartError}</div> : (
          cartItems?.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalItemPrice}</div>
        </div>
      </div>
    </div>
  );
}
