import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProtectRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)
    if (loading) {

        <span className="loading loading-spinner loading-lg"></span>
        return
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login" replace ></Navigate>
    );

};
ProtectRout.propTypes = {
    children: PropTypes.node,
}

export default ProtectRout;