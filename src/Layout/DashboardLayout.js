import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 font-semibold bg-base-100">
            <li className="hover:text-primary">
              <Link>My Orders</Link>
            </li>
            <li className="hover:text-primary">
              <Link to='/dashboard/addproduct'>Add Product</Link>
            </li>
            <li className="hover:text-primary">
              <Link to='/dashboard/myproducts'>My Product</Link>
            </li>
            <li className="hover:text-primary">
              <Link to='/dashboard/allsellers'>All Sellers</Link>
            </li>
            <li className="hover:text-primary">
              <Link>All Buyers</Link>
            </li>
            <li className="hover:text-primary">
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
