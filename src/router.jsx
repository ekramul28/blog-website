import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./page/home/Home";
import Login from "./Components/Header/Login/Login";
import Register from "./Components/Header/Login/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
            }
        ]
    },
]);

export default router;