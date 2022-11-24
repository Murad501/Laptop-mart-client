import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Register = () => {
  const [sellerRegister, setSellerRegister] = useState(false);
  const {createUser, googleLogin} = useContext(authContext)
  const [firebaseError, setFirebaseError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const user = {
        name: data.name,
        email: data.email
    }
    console.log(user)
    createUser(data.email, data.password)
    .then(result => {
        const currentUser = result.user
        updateProfile(currentUser, {
            displayName: data.name
        })
        .then(() => {
            console.log(currentUser)
            setFirebaseError('')
        })
        .catch((err)=>setFirebaseError(err.message))
    })
    .catch(err => setFirebaseError(err.message))
  };


  const handleSellerRegister = (data) => {
    console.log(data)
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => console.log(result.user))
    .catch(err => setFirebaseError(err.message))
  }

  return (
    <div className="hero my-40 text-black px-1">
      <div className="card  px-4 py-5 rounded-sm w-full max-w-md border">
        {sellerRegister ? (
          <div>
            <h1 className="my-5 text-center font-bold text-3xl">
              Seller Register
            </h1>
            {firebaseError && <p className="text-center text-red-600 my-2">{firebaseError}</p>}
            <form onSubmit={handleSubmit(handleSellerRegister)}>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("name", { required: "Name is required" })}
                />
                <p className="text-red-600">
                  {errors.name && <span>{errors.name?.message}</span>}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("email", { required: "Email is required" })}
                />
                <p className="text-red-600">
                  {errors.email && <span>{errors.email?.message}</span>}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <p className="text-red-600">
                  {errors.password && <span>{errors.password?.message}</span>}
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary rounded-sm text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="my-5 text-center font-bold text-3xl">Register</h1>
            {firebaseError && <p className="text-center text-red-600 my-2">{firebaseError}</p>}
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("name", { required: "Name is required" })}
                />
                <p className="text-red-600">
                  {errors.name && <span>{errors.name?.message}</span>}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("email", { required: "Email is required" })}
                />
                <p className="text-red-600">
                  {errors.email && <span>{errors.email?.message}</span>}
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral text-sm">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <p className="text-red-600">
                  {errors.password && <span>{errors.password?.message}</span>}
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary rounded-sm text-white"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center my-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
            <button onClick={handleGoogleLogin} className="flex justify-center items-center py-3 rounded-sm font-semibold text-white text-md gap-3 bg-primary w-full">
              <FaGoogle></FaGoogle> Google Login
            </button>
          </div>
        )}
        <p className="flex justify-center items-center gap-3 font-semibold mt-5">
          Seller Registration
          <input
            onChange={() => setSellerRegister(!sellerRegister)}
            type="checkbox"
            className="toggle toggle-primary"
          />
        </p>
      </div>
    </div>
  );
};

export default Register;