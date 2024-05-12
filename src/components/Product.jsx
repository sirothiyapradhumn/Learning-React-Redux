import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddItem, incItemQuantity } from '../../store/cartItemReducer';

function Product({ productID, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);

  const onClickAddToCart = () => {
    const itemExistInCart = cartItem.find((item) => item.productID === productID);
    if(itemExistInCart) return dispatch(incItemQuantity(productID));
    return dispatch(cartAddItem({ productID, title, rating, price, imageUrl }));
  }

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
        <button onClick={onClickAddToCart}>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  )
}
Product.propTypes  = {
  productId: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  imageUrl: PropTypes.string
}
export default Product;