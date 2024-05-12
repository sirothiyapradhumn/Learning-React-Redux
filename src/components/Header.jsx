import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import WishIcon from '../assets/wish-icon.svg'
import { useSelector } from 'react-redux';

export default function Header() {
  const state = useSelector((state) => state);
  const totalCartItem = state?.cartItem?.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="wish-cart-icons"> 
          <Link className="cart-icon" to="/wishlist">
            <img src={WishIcon} alt="wish-icon" />
            <div className="cart-items-count">{state?.wishList?.length}</div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{totalCartItem}</div>
          </Link>
        </div>

      </div>
    </header>
  )
}