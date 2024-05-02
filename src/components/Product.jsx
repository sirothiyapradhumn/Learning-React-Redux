import PropTypes from 'prop-types';

function Product({ title, rating, price, imageUrl }) {
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
        <p className="price">{price}</p>
      </div>
      <div className="cta-container">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}
Product.propTypes  = {
  title: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string
}
export default Product;