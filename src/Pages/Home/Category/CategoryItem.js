import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const CategoryItem = ({category}) => {
    return (
        <div className='border hover:text-primary py-5 hover:border-primary text-center'>
            <FaLaptop className='mx-auto text-5xl my-2'></FaLaptop>
            <h1 className='text-2xl md:text-3xl font-bold'>{category.name}</h1>
        </div>
    );
};

export default CategoryItem;