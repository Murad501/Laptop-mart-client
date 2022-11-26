import React from 'react';
import { FaLaptop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    return (
        <Link to={`/category/${category.name}`} className='border w-60 hover:text-primary py-5 hover:border-primary text-center'>
            <FaLaptop className='mx-auto text-5xl my-2'></FaLaptop>
            <h1 className='text-2xl md:text-3xl font-bold'>{category.name}</h1>
        </Link>
    );
};

export default CategoryItem;