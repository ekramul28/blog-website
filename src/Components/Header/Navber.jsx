import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const NavBer = () => {
    const { user, Logout } = useContext(AuthContext);
    const handelButton = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                Logout()
                    .then(result => {
                        console.log(result);
                        Swal.fire('Logout succesfull');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })



    }
    const link = <>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/addBlog">Add Blog</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/allBlogs">All Blogs</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/featureBlogs">Feature Blogs</NavLink></li>
        <li className="font-semibold text-lg dark:text-white"><NavLink to="/wishlist">Wishlist</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 dark:bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost dark:text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <img className="w-10 h-10 md:w-20 md:h-20 rounded-full" src="https://i.ibb.co/MhTpsSh/images-5-removebg-preview.png" alt="" /> */}
                        <img className="w-10 h-10 md:w-20 md:h-20 rounded-full" src="https://i.ibb.co/vB14ZwB/images-removebg-preview.png" alt="" />
                        <h1 className="text-2xl font-semibold text-yellow-500"><span className="text-5xl text-yellow-800">R</span>andom</h1>


                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <div className="hidden md:block dark:text-white ">
                        {
                            user && <p>{user?.email.slice(0, 10)}</p>
                        }
                    </div>

                    {
                        user && <img className="w-10 h-10 md:w-14 md:h-14 mx-1 rounded-full" src={user?.photoURL} alt="" />

                    }
                    {
                        user ? <button onClick={handelButton} className="btn bg-yellow-500 border-none text-white">LogOut</button> : <Link to="/login" className="btn bg-yellow-500 border-none text-white">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBer;