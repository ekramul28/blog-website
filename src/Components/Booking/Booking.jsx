import PropTypes from 'prop-types';

const Booking = ({ booking }) => {
    const { _id, category, image, short_description, title } = booking;
    const handelDelete = (id) => {
        console.log(id)
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
                            <button className="btn bg-yellow-500 text-white">Details</button>
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
}
export default Booking;