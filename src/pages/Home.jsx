import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

export default function Home() {
  const productsList = useSelector((state) => state.products.list);
  const productLoading = useSelector((state) => state.products.loading);
  const productError = useSelector((state) => state.products.error);
  return productLoading ? (
    <div className='spinner' />
  ) : productError || (
    <div className="products-container">
      {productsList?.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
