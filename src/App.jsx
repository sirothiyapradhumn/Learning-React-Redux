// import React from 'react';
// import { productList } from '../store/productList';
import Product from './components/Product';
import './App.css';
// import { store } from '../store';
import { useSelector } from 'react-redux';

export default function App() {
  // bad way
  // const productsByStore = store.getState().products;
  const productsListByStore = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productsListByStore.map(({ id, title, price, image, rating }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
