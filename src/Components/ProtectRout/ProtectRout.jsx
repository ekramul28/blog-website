import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectRout = ({ children }) => {
    const { user } = useContext(AudioContext);
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};
ProtectRout.propTypes = {
    children: PropTypes.node,
}

export default ProtectRout;