import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Booking from "../Booking/Booking";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [allBooking, setAllBooking] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllBooking(data)
            })
    }, [user?.email])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
            {
                allBooking?.map(booking => <Booking key={booking._id} booking={booking} setAllBooking={setAllBooking} allBooking={allBooking}></Booking>)
            }
        </div>
    );
};

export default Wishlist;