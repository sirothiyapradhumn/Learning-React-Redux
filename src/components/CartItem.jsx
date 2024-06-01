import React from 'react'
import { useDispatch } from 'react-redux'
import { cartRemoveItem, decItemQuantity, incItemQuantity } from '../../store/slices/cartItemSlice';
import DeleteIcon from '../assets/delete-icon.svg';
import { wishCartRemoveItem } from '../../store/slices/wishlistSlice';

export default function CartItem({ productId, title, rating, price, imageUrl, quantity, showItemQuantity = true }) {
  const dispatch = useDispatch();
  const handleIncQuantitiy = () => {
    dispatch(incItemQuantity({ productId }));
  }
  const handleDecQuantitiy = () => {
    dispatch(decItemQuantity({ productId }));
  }
  const handleRemoveWish = () => {
    dispatch(wishCartRemoveItem({ productId }));
  }
  const handleRemoveCart = () => {
    dispatch(cartRemoveItem({ productId }));
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
      {
        showItemQuantity
          ? (
            <>
              <div className="item-quantity">
                <button onClick={handleDecQuantitiy}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncQuantitiy}>+</button>
              </div>
              <div className="item-total">${quantity * price}
                <img className="delete-cart" src={DeleteIcon} alt="delete-icon" onClick={handleRemoveCart} />
              </div>
            </>
          )
          :
          (
            <div className="cart-icon" >
              <img className="delete-cart" src={DeleteIcon} alt="delete-icon" onClick={handleRemoveWish} />
            </div>
          )
      }
    </div>
  )
}