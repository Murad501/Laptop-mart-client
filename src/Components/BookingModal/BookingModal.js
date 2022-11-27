import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../Context/UserContext";

const BookingModal = ({ bookingProduct, refetch, setBookingProduct}) => {

  const {user} = useContext(authContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBookingProduct = (data) => {
    const product = {
      productName: bookingProduct.name,
      price: bookingProduct.sellingPrice,
      productId: bookingProduct._id,
      userName: user.displayName,
      email: user.email,
      location: data.location,
      number: data.number
    }
    fetch('https://backend-laptop-mart.vercel.app/bookingproduct', {
      method: 'POST', 
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        refetch()
        setBookingProduct(null)
        toast.success('product booked successfully')
      }
    })
  }

  return (
    <div>
      {
        <div>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{bookingProduct?.name}</h3>
              <form className="my-5" onSubmit={handleSubmit(handleBookingProduct)}>
                <div className="form-control">
                  <label className="label">
                    <span className="text-neutral text-sm">Name</span>
                  </label>
                  <input
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered focus:outline-none rounded-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-neutral text-sm">Email</span>
                  </label>
                  <input
                  value={user?.email}
                  readOnly
                    className="input input-bordered focus:outline-none rounded-sm"
                  />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="text-neutral text-sm">Price $</span>
                  </label>
                  <input
                  value={bookingProduct?.sellingPrice}
                  readOnly
                    className="input input-bordered focus:outline-none rounded-sm"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-neutral text-sm">Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="your phone number"
                    className="input input-bordered focus:outline-none rounded-sm"
                    {...register("number", { required: "Number is required" })}
                  />
                  <p className="text-red-600">
                    {errors.number && <span>{errors.number?.message}</span>}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-neutral text-sm">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="meeting location"
                    className="input input-bordered focus:outline-none rounded-sm"
                    {...register("location", { required: "Location is required" })}
                  />
                  <p className="text-red-600">
                    {errors.location && <span>{errors.location?.message}</span>}
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-sm text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default BookingModal;
