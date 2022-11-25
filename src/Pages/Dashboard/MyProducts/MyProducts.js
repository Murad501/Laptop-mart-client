import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Product from './Product';

const MyProducts = () => {
    const {data:products = [], refetch} = useQuery({
        queryKey: ['/products'],
        queryFn: ()=>fetch('http://localhost:5000/products')
        .then(res => res.json())
    })
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5'>My Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    products.map(product=><Product key={product._id} refetch={refetch} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default MyProducts;