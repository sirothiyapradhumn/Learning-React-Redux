import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { getAllProducts, getProductError, getProductLoadingState } from "../../store/slices/productSlice";

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const productLoading = useSelector(getProductLoadingState);
  const productError = useSelector(getProductError);
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
