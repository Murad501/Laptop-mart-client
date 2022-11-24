import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {loginUser, googleLogin} = useContext(authContext)
    const [firebaseError, setFirebaseError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        loginUser(data.email, data.password)
        .then(result => {
            toast.success('user login successfully')
            navigate(from, { replace: true });
        })
        .catch(err => setFirebaseError(err.message))
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            navigate(from, { replace: true });
            toast.success('user login successfully')
        })
        .catch(err => setFirebaseError(err.message))
    }
  return (
    <div className="hero my-40 text-black px-1">
      <div className="card  px-4 py-5 rounded-sm w-full max-w-md border">
        <h1 className="mb-5 text-center font-bold text-3xl">Login</h1>
        {firebaseError && <p className="text-center text-red-600 my-2">{firebaseError}</p>}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="text-neutral text-sm">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm"
                {...register("email", {required: 'Email is required'})}
              />
              <p className="text-red-600">{errors.email && <span>{errors.email?.message}</span>}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-neutral text-sm">Email</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none rounded-sm"
                {...register("password", {required: 'Password is required'})}
              />
              <p className="text-red-600">{errors.password && <span>{errors.password?.message}</span>}</p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary rounded-sm text-white">Login</button>
            </div>
          </form>
          <p className="text-center my-4">New to Laptop Mart? <Link to='/register' className="text-primary">Register</Link></p>
          <button onClick={handleGoogleLogin} className="flex justify-center items-center py-3 rounded-sm font-semibold text-white text-md gap-3 bg-primary"><FaGoogle></FaGoogle> Google Login</button>
        </div>
    </div>
  );
};

export default Login;
