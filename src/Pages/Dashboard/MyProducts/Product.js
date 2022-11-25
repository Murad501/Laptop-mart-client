import React from "react";

const Product = ({product}) => {
    console.log(product)
    const {name, image, sellingPrice, description, available, advertised} = product
  return (
    <div className="card p-2 rounded-sm border hover:shadow-sm">
        <h2 className="card-title my-3">{name.length > 50 ? name.slice(0, 50)+('...') : name}</h2>
      <figure>
        <img className="w-full" src={image} alt="Product_Image" />
      </figure>
      <div className="card-body p-0">
        <p><span className="text-xl">Description:</span> {description.length > 250 ? description.slice(0, 250)+('...'):description}</p>
        <div className="my-5 flex justify-between items-center">
        <p className="text-lg">Status: <span className="font-bold text-primary">{available ? 'Available' : 'Sold'}</span></p>
        <p className="text-lg text-end">Price: <span className="font-bold text-primary">${sellingPrice}</span></p>
        </div>
        <div className="card-actions justify-between">
          <button className="btn bg-red-600 text-white border-none">Delete</button>
          {
            advertised ? 
            <button className={`btn border border-primary text-white ${!available && 'btn-disabled'}`}>Advertised</button>
            :
            <button className={`btn btn-primary text-white ${!available && 'btn-disabled'}`}>Advertise</button>
            
            
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
