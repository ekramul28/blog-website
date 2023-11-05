import { Outlet } from "react-router-dom";
import NavBer from "./Components/Header/Navber";

const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;