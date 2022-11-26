import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";
import { authContext } from "../../Context/UserContext";

const Header = () => {
  const {user, Logout} = useContext(authContext)


  const handleLogOut = () => {
    Logout()
    .then(()=>{
      localStorage.removeItem('access-token')
    })
    .catch(()=>{})
  }

  const menu = [
    <div className="flex items-center gap">
      <li className="text-primary font-semibold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {
        user? <button onClick={handleLogOut} className="text-primary font-semibold">Logout</button> : <li className="text-primary font-semibold">
        <Link to="/login">Login</Link>
      </li>
      }
    </div>,
  ];


  return (
    <div className="navbar px-0 py-4">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to='/' className="text-2xl text-primary font-bold flex items-center gap-3">
        <FaLaptop></FaLaptop>
        <p>Laptop Mart</p>
      </Link>
      </div>
      <div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menu}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
    </div>
  );
};

export default Header;
