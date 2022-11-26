import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    image,
    sellingPrice,
    buyingPrice,
    postDate,
    location,
    year,
    sellerName,
    description
  } = product;
  return (
    <div className="card card-compact border rounded-sm hover:shadow-lg">
      <figure>
        <img className="w-9/12" src={image} alt="Product_image" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="sm:flex justify-center items-center gap-1 mt-5">
          <p className="text-md">
            {" "}
            Price:{" "}
            <span className="font-bold text-primary">${sellingPrice}</span>
          </p>
          <p className="text-md ">
            {" "}
            Buying Price:{" "}
            <span className="font-bold text-primary">${buyingPrice}</span>
          </p>
          <p className="text-md">
            {" "}
            Posted: <span className="font-bold text-primary">{postDate}</span>
          </p>
        </div>
        <div className="sm:flex justify-center items-center gap-1 mt-5">
          <p className="text-md">
            {" "}
            Location:{" "}
            <span className="font-bold text-primary">{location}</span>
          </p>
          <p className="text-md">
            Used: 
            <span className="font-bold text-primary"> {year} Years</span>
          </p>
        </div>
        <p className="text-xl mt-5">Seller: <span className="font-bold text-primary">{sellerName}</span></p>
        <p className="mt-5">Description: {description.length > 350 ? description.slice(0, 350)+('...'):description}</p>
        <div className="card-actions justify-center mt-5">
          <button className="btn btn-primary text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;