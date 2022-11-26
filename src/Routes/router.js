
import Page404 from "../Components/Page404";
import DashboardLayout from "../Layout/DashboardLayout";
import CategoryProduct from "../Pages/CategoryProducts/CategoryProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        errorElement: <Page404></Page404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.name}`)
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
        errorElement: <Page404></Page404>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            }
        ]
    }
])

export default router