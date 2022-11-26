import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Advertised = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: () =>
      fetch("http://localhost:5000/advertised").then((res) => res.json()),
  });
  return (
    <div>
      {products.length ? (
        <div className="my-28">
          <h1 className="text-3xl font-bold text-center">
            Advertised Products
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Advertised;
