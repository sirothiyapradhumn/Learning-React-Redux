import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import WishIcon from "../assets/wish-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  fetchProductError,
  updateAllProduct,
} from "../../store/slices/productSlice";
import {
  fetchCartError,
  fetchCartitem,
  loadCartItem,
} from "../../store/slices/cartItemSlice";
import { fetchData } from "../../store/middleware/api";

export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalCartItem = state?.cartItem?.list?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );


  useEffect(() => {
    dispatch(
      fetchData({
        url: "products",
        onSuccess: updateAllProduct.type,
        onStart: fetchProduct.type,
        onError: fetchProductError.type,
      })
    );

    dispatch(
      fetchData({
        url: "carts/5",
        onSuccess: loadCartItem.type,
        onStart: fetchCartitem.type,
        onError: fetchCartError.type,
      })
    );

    // we used action creator for api call, above fn is same
    // dispatch({
    //   type: "api/makeCall",
    //   payload: {
    //     url: "carts/5",
    //     onSuccess: loadCartItem.type,
    //     onStart: fetchCartitem.type,
    //     onError: fetchCartError.type,
    //   },
    // });
  }, []);

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
  );
}
