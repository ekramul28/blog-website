import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./page/home/Home";
import Login from "./Components/Header/Login/Login";
import Register from "./Components/Header/Login/Register/Register";
import NoPage from "./Components/Nopag/Nopage";
import AddBlog from "./Components/AddBlog/Addblog";
import Update from "./Components/Update/Update";
import AllBlog from "./Components/AllBlog/AllBlog";
import Wishlist from "./Components/Wishlist/Wishlist";
import Details from "./page/home/Details";
import ProtectRout from "./Components/ProtectRout/ProtectRout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NoPage></NoPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addBlog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: "/updateBlog/:id",
                element: <ProtectRout><Update></Update></ProtectRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)

            },
            {
                path: "/wishlist",
                element: <Wishlist></Wishlist>
            },
            {
                path: "/allBlogs",
                element: <AllBlog></AllBlog>,
                // loader: () => fetch('http://localhost:5000/blog')
            }
        ]
    },
]);

export default router;