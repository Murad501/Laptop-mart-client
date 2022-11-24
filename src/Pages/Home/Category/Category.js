import React from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: "Macbook"
        },
        {
            id: 2,
            name: "HP"
        },
        {
            id: 3,
            name: "Dell"
        },
        {
            id: 4,
            name: "Asus"
        },
        {
            id: 5,
            name: "Lenovo"
        },
        {
            id: 6,
            name: "Razer"
        },
        {
            id: 7,
            name: "Samsung"
        },
    ]
    return (
        <div className='my-28 px-1'>
            <h1 className='text-3xl font-bold text-center'>Category</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-5 my-10'>
            {
                categories.map(category =><CategoryItem key={category.id} category={category}></CategoryItem> )
            }
            </div>
        </div>
    );
};

export default Category;