import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from "sweetalert2";


const AllBlogs = ({ blog }) => {
    const { user } = useContext(AuthContext)
    const { _id, category, image, short_description, title } = blog
    const handelWishlist = (id) => {
        const data = { category, image, short_description, title, email: user?.email }
        console.log(user?.email)
        axios.post('http://localhost:5000/wishlist', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire('Add Successful');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="">
            <div className="card  bg-base-100 shadow-xl h-[620px]">
                <figure><img className="w-full h-[300px]" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {title}
                    </h2>
                    <h1 className="font-semibold">{category}</h1>
                    <p >{short_description}</p>
                    <div className="card-actions justify-end gap-3">
                        <button className="btn bg-yellow-500 text-white">Details</button>
                        <button onClick={() => handelWishlist(_id)} className="btn bg-yellow-500 text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div >
    );
};
AllBlogs.propTypes = {
    blog: PropTypes.object
}

export default AllBlogs;