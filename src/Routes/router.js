
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default router