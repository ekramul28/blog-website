import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../firebase";
import axios from "axios";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const register = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true);
        return signOut(auth);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const lmUser = { email: userEmail };
            setLoading(false);
            setUser(currentUser)
            if (currentUser) {
                axios.post('https://blog-website-server-zeta.vercel.app/jwt', lmUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })

            } else {
                axios.post('https://blog-website-server-zeta.vercel.app/logout', lmUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        register,
        login,
        logInWithGoogle,
        loading,
        Logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;