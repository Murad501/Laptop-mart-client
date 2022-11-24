import React from "react";
import img from '../../../Assets/hero.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content max-w-full px-0 flex-col lg:flex-row-reverse">
        <img
        src={img}
          alt=""
          className="rounded-lg w-full sm:w-4/6 lg:w-1/2"
        />
        <div className="w-full sm:w-5/6 lg:w-1/2">
          <h1 className="text-5xl font-bold">People Powered</h1>
          <p className="py-6">
          On Laptop Mart, you buy and sell directly with other users. No middleman means you get the best price and most value. <br /> <br />
          Laptop Mart is a platform on which you can buy and sell almost everything! We help people buy and sell Laptop. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.
          </p>
          <button className="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
