import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    const { category, image, short_description, title, description } = data;
    console.log(data)
    return (
        <div>
            <div className=" card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <h2 className="text-xl font-semibold">{category}</h2>
                    <p className="text-md font-medium">{short_description}</p>
                    <p>{description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div> */}
                </div>
            </div>
            <div className="bg-green-500 p-20">
                <h1 className="text-3xl text-center font-bold">Write Your Comment</h1>
                <div className="  flex justify-around items-center ">
                    <form>
                        {/* <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your Email</span>
                                </label>
                                <div className="">
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your Blog Image</span>
                                </label>
                                <div className="">
                                    <input type="text" name="image" placeholder="Image_url" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div> */}
                        <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your comment</span>
                                </label>
                                <div className="">
                                    <textarea className=" border-2 p-3 rounded-lg  w-60 lg:w-[400px] pr-16" name="area" id="" cols="30" rows="5" placeholder="write your comment"></textarea>
                                </div>
                            </fieldset>
                        </div>
                        <div className="flex justify-center items-center mt-3">
                            <input className=" bg-yellow-500 btn border-none text-white" type="submit" value="Submit" />
                        </div>
                    </form>
                    <div>
                        <img className="w-full hidden md:block" src="https://i.ibb.co/LvqzPr4/icon-of-blank-message-dialogue-box-free-vector-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Details;