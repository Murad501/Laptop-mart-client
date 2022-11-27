import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useBuyer } from "../Components/isBuyer";
import { useAdmin } from "../Components/useAdmin";
import { useSeller } from "../Components/useSeller";
import { authContext } from "../Context/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 font-semibold bg-base-100">
            {isBuyer && (
              <li className="hover:text-primary">
                <Link to='/dashboard/myorders'>My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li className="hover:text-primary">
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li className="hover:text-primary">
                  <Link to="/dashboard/myproducts">My Product</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="hover:text-primary">
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li className="hover:text-primary">
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
