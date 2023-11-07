import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { login, logInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);
    const handelForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        login(email, password)
            .then((result) => {

                if (result.user) {
                    Swal.fire('Login Successful');
                    form.reset();
                    navigate(location?.state ? location?.state : "/")
                }
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const googleClick = () => {
        logInWithGoogle()
            .then(result => {

                if (result.user) {
                    Swal.fire('Login Successful')
                    console.log(result.user)

                }

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-gray-600">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                        <form onSubmit={handelForm} className="card-body w-80 md:w-[400px]  lg:w-[500px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  text-white bg-yellow-500 border-none">Login</button>
                                <div className="mt-3">
                                    <p>No Account <Link to="/register" className="text-yellow-500 text-2xl">Register</Link></p>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-red-500">{error}</h1>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div onClick={googleClick} className=" border-2 border-white p-4 rounded-xl mt-5">
                        <p className="flex justify-center items-center gap-3 text-xl font-semibold text-white"><FcGoogle /> Continue With Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;