import React from 'react';
import Advertised from '../Advertised/Advertised';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Advertised></Advertised>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;