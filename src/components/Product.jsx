import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddItem, incItemQuantity } from '../../store/slices/cartItemSlice';
import { wishCartAddItem } from '../../store/slices/wishlistSlice';

function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);
  const wishList = useSelector((state) => state.wishList);
  const addToCart = () => {
    const itemExistInCart = cartItem.list.find((item) => item.productId === productId);
    if (itemExistInCart) return dispatch(incItemQuantity({productId}));
    return dispatch(cartAddItem({ productId }));
  }

  const addToWish = () => dispatch(wishCartAddItem({ productId, title, rating, price, imageUrl }));

  const disableWish = wishList?.length > 0 && wishList?.find((item) => item.productId === productId);

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={addToCart}>Add to Cart</button>
        <button
          onClick={addToWish}
          disabled={disableWish}
        >
          Add to Wishlist</button>
      </div>
    </div>
  )
}
Product.propTypes = {
  productId: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  imageUrl: PropTypes.string
}
export default Product;