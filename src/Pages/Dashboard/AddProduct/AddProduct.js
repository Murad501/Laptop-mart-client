import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../../Context/UserContext";
import { format } from 'date-fns'
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AddProduct = () => {
  const imgbbApi = process.env.REACT_APP_imgbb_api;
  const { user } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {data:categories = []} = useQuery({
    queryKey: ['categories'], 
    queryFn: ()=> fetch('http://localhost:5000/categories')
    .then(res => res.json())
})
console.log(categories)

  const handleAddProduct = (data) => {
    const addDate = new Date();
    const postDate = format(addDate, 'PP')
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.url) {
          const product = {
            name: data.productName,
            category: data.category,
            condition: data.condition,
            description: data.description,
            image: result.data.url,
            location: data.location,
            userNumber: data.number,
            year: data.year,
            sellingPrice: data.sellingPrice,
            buyingPrice: data.buyingPrice,
            sellerName: user.displayName,
            email: user.email,
            available: true,
            advertised: false,
            postDate
          };

          fetch('http://localhost:5000/products', {
            method: 'POST', 
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(product)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged){
              toast.success('product added successfully')
            }
          })
        }
      });
  };

  return (
    <div className="mx-5 mt-10 mb-20 border border-primary p-5 rounded">
      <h1 className="mb-5 text-center font-bold text-3xl">Add A Product</h1>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("productName", {
                required: "Product Name is required",
              })}
            />
            <p className="text-red-600">
              {errors.productName && <span>{errors.productName?.message}</span>}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Product Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary focus:outline-none rounded-sm"
              {...register("image", { required: "Image is required" })}
            />
            <p className="text-red-600">
              {errors.image && <span>{errors.image?.message}</span>}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Condition</span>
            </label>
            <select
              className="select select-bordered select-primary focus:outline-none rounded-sm"
              {...register("condition", { required: "Condition is required" })}
            >
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            <p className="text-red-600">
              {errors.condition && <span>{errors.condition?.message}</span>}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Number</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("number", { required: "Number is required" })}
            />
            <p className="text-red-600">
              {errors.number && <span>{errors.number?.message}</span>}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Location</span>
            </label>
            <input
              type="text"
              placeholder="Your Location"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("location", { required: "Location is required" })}
            />
            <p className="text-red-600">
              {errors.location && <span>{errors.location?.message}</span>}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Category</span>
            </label>
            <select
              className="select select-bordered select-primary focus:outline-none rounded-sm"
              placeholder="Product Category"
              {...register("category", { required: "Category is required" })}
            >
                {
                  categories.map((category, idx) => <option key={idx}>{category.name}</option>)
              }
              
            </select>
            <p className="text-red-600">
              {errors.category && <span>{errors.category?.message}</span>}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Year of Uses</span>
            </label>
            <input
              type="text"
              placeholder="Uses Years"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("year", {
                required: "How many years uses is required",
              })}
            />
            <p className="text-red-600">
              {errors.year && <span>{errors.year?.message}</span>}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Selling Price</span>
            </label>
            <input
              type="number"
              placeholder="Selling Price"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("sellingPrice", {
                required: "Selling Price is required",
              })}
            />
            <p className="text-red-600">
              {errors.sellingPrice && (
                <span>{errors.sellingPrice?.message}</span>
              )}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-neutral text-sm">Buying Price</span>
            </label>
            <input
              type="number"
              placeholder="Buying Price"
              className="input input-bordered input-primary focus:outline-none rounded-sm"
              {...register("buyingPrice", { required: "Buying Price is required" })}
            />
            <p className="text-red-600">
              {errors.buyingPrice && <span>{errors.buyingPrice?.message}</span>}
            </p>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-neutral text-sm">Product Description</span>
          </label>
          <textarea
            placeholder="Product Description"
            className="textarea textarea-bordered textarea-primary focus:outline-none rounded-sm"
            {...register("description", {
              required: "Product Description is required",
            })}
          ></textarea>
          <p className="text-red-600">
            {errors.description && <span>{errors.description?.message}</span>}
          </p>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary rounded-sm text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
