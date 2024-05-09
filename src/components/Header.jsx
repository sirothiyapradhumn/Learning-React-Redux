import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItem = useSelector((state) => state.cartItem);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{cartItem?.length}</div>
        </Link>
      </div>
    </header>
  )
}