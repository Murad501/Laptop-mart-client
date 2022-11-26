import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const CategoryProduct = () => {
  const products = useLoaderData();
  const category = products.map(product => product.category)
  return (
    <div>
      {
        products.length > 0 ?
        <div className="my-28">
        <h1 className="text-3xl font-bold text-center">{category[0]}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      :
      <h1 className="text-3xl font-bold text-center my-40">No Product Found</h1>
      }
    </div>
  );
};

export default CategoryProduct;
