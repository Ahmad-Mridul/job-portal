import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SingleJob from "../pages/SingleJob";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:`/jobs/:id`,
                element:<PrivateRoute><SingleJob></SingleJob></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            }
        ]
    }
])
