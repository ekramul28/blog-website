import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./page/home/Home";
import Login from "./Components/Header/Login/Login";
import Register from "./Components/Header/Login/Register/Register";
import NoPage from "./Components/Nopag/Nopage";
import AddBlog from "./Components/AddBlog/Addblog";
import Update from "./Components/Update/Update";
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
                path: "/updateBlog",
                element: <Update></Update>
            }
        ]
    },
]);

export default router;