import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const {data:categories = []} = useQuery({
        queryKey: ['categories'], 
        queryFn: ()=> fetch('http://localhost:5000/categories')
        .then(res => res.json())
    })
    console.log(categories)
    return (
        <div className='my-28 px-1'>
            <h1 className='text-3xl font-bold text-center'>Category</h1>
            <div className='flex flex-wrap mx-auto justify-center gap-5 my-10'>
            {
                categories.map(category =><CategoryItem key={category._id} category={category}></CategoryItem> )
            }
            </div>
        </div>
    );
};

export default Category;