import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";

const Header = () => {
  const menu = [
    <div className="flex items-center gap">
      <li className="text-primary font-semibold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="text-primary font-semibold">
        <Link to="/dashboard">Logout</Link>
      </li>
    </div>,
  ];


  return (
    <div className="navbar p-0">
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
        <div className="text-2xl text-primary font-bold flex items-center gap-3">
        <FaLaptop></FaLaptop>
        <Link>Laptop Mart</Link>
      </div>
      </div>
      <div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menu}
        </ul>
      </div>
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
      </div>
    </div>
    // <div className="navbar">
    //   <div className="navbar-start text-2xl text-primary font-bold flex items-center gap-3">
    //     <FaLaptop></FaLaptop>
    //     <Link>Laptop Mart</Link>
    //   </div>
    //   <div className="navbar-end">
    //   <div className="hidden lg:flex">
    //     <ul className="menu menu-horizontal p-0">
    //         {menu}
    //     </ul>
    //   </div>
    //     {/* <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box"
    //       >
    //         {menu}
    //         <Link className="btn btn-primary text-white rounded capitalize font-bold">Login</Link>
    //       </ul>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Header;
