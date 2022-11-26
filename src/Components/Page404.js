import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/404.png'

const Page404 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20'>
            <div className='mx-auto'>
            <img src={image} alt="404_Image" />
            </div>
            <div className='text-center'>
                <h1 className='text-2xl italic'>Awww...Don't Cry</h1>
                <p className='mt-5 mb-10'>it's just a 404 Error!</p>
                <p >What you are looking for may have been <br /> misplaced in Long Term Memory</p>
                <Link className='btn btn-primary mt-10' to='/'>Go to Home Page</Link>
            </div>
        </div>
    );
};

export default Page404;