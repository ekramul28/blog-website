import PropTypes from 'prop-types';

const AllBlogs = ({ blog }) => {
    const { category, image, short_description, title } = blog

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
                        <button className="btn bg-yellow-500 text-white">Wishlist</button>
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