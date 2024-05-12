import React from 'react'
import { useDispatch } from 'react-redux'
import { decItemQuantity, incItemQuantity } from '../../store/cartItemReducer';

export default function CartItem({ productID, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch();
  const handleIncQuantitiy = () => {
    dispatch(incItemQuantity(productID));
  }
  const handleDecQuantitiy = () => {
    dispatch(decItemQuantity(productID));
  }
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={handleDecQuantitiy}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncQuantitiy}>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}