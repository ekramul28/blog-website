import Swal from "sweetalert2";

const NewSletter = () => {
    const handelSubmit = (e) => {
        e.preventDefault()
        Swal.fire('Thank you for Subscribing to our newsletter')
        e.target.reset();
    }
    return (
        <div className="bg-green-500 p-20 mb-20">
            <div className="grid justify-center items-center text-center my-4">
                <h1 className="text-4xl font-bold my-2">Subscribe Newsletter to get updates</h1>
                <p>Download the Just Eat app for faster ordering and more <br /> presonalised recommendations</p>
            </div>
            <div >
                <form onSubmit={handelSubmit} className="flex justify-center gap-5 pb-2" >
                    <input type="email" name="email" id="" className="p-2 w-72 rounded-md" placeholder="Inter Your Email" required />
                    <input className="btn bg-yellow-500 border-none text-white" type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    );
};

export default NewSletter;