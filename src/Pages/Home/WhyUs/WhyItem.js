import React from 'react';

const WhyItem = ({item}) => {
    const {title, icon, text} = item
    return (
        <div className='text-center p-3'>
            <span className='flex justify-center text-primary text-3xl'>{icon}</span>
            <h2 className='text-2xl font-bold my-2'>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default WhyItem;