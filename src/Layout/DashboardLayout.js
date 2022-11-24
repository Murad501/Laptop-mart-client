import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link>My Orders</Link>
            </li>
            <li>
              <Link>Add Product</Link>
            </li>
            <li>
              <Link>My Product</Link>
            </li>
            <li>
              <Link>All Sellers</Link>
            </li>
            <li>
              <Link>All Buyers</Link>
            </li>
            <li>
              <Link>Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
