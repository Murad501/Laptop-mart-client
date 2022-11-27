import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import BookingModal from '../../Components/BookingModal/BookingModal'
import { useQuery } from "@tanstack/react-query";

const CategoryProduct = () => {
  const products = useLoaderData();
  const {data: categories = [], refetch} =useQuery({
    queryKey: ['categories'],
    queryFn: ()=> fetch('https://backend-laptop-mart.vercel.app/categories')
    .then(res => res.json())
  })
  const product = products.find(product => {
    const ctg = categories.map(ct => ct.name)
    return ctg.map(c => c === product.category)
  })
 
  const [bookingProduct, setBookingProduct] = useState(null)
  return (
    <div>
      {
        products.length > 0 ?
        <div className="my-28">
        <h1 className="text-3xl font-bold text-center">{product.category}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} setBookingProduct={setBookingProduct}></ProductCard>
          ))}
        </div>
      </div>
      :
      <h1 className="text-3xl font-bold text-center my-40">No Product Found</h1>
      }
      {
        bookingProduct && <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct} refetch={refetch}></BookingModal>
      }
    </div>
  );
};

export default CategoryProduct;
