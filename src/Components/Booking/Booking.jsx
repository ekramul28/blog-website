import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Booking = ({ booking, setAllBooking, allBooking }) => {
    const { id, _id, category, image, short_description, title } = booking;
    const handelDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/wishlist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire('delete Successful')
                            const remaing = allBooking?.filter(man => man._id !== id);

                            setAllBooking(remaing)
                        }
                    }).catch(error => {
                        console.log(error);
                    })
            }
        })




    }
    return (
        <div>
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
                            <Link to={`/details/${id}`}> <button className="btn bg-yellow-500 text-white">Details</button></Link>
                            <button onClick={() => handelDelete(_id)} className="btn bg-yellow-500 text-white">Delete</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};
Booking.propTypes = {
    booking: PropTypes.object,
    setAllBooking: PropTypes.node,
    allBooking: PropTypes.array
}
export default Booking;