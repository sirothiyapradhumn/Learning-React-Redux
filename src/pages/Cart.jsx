import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state?.cartItem?.map(({ productId, quantity }) => {
      const productData = state.products.list.find(
        (product) => product.id === productId
      );
      return { ...productData, quantity };
    });
  });

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
        {cartItems?.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
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
