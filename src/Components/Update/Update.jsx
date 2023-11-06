import axios from "axios";
import { useLoaderData, useParams, } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { title, image, short_description, category, description } = data;
    const handelForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const short = form.short.value;
        const longDescription = form.longDescription.value;
        const value = { name, image, category, short, longDescription }
        console.log(value);

        axios.put(`http://localhost:5000/blog/${id}`, value)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire('update succesfull');
                }
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit={handelForm} className="bg-slate-300 p-20">
                <h1 className="text-center mb-6 font-bold text-3xl">You can <span className='text-yellow-500'>Update your Blog</span> </h1>

                <div className=" md:flex justify-center gap-8 ">
                    <div className='w-80 md:w-[300px] lg:w-[400px]'>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Blog Title</span>
                                </label>
                                <div className="">
                                    <input type="text" name="name" defaultValue={title} placeholder="Title Name" className="input input-bordered w-60 md:w-[300px] lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your Blog Image</span>
                                </label>
                                <div className="">
                                    <input type="text" name="image" defaultValue={image} placeholder="Image_url" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>

                    </div>
                    <div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Blog Category</span>
                                </label>
                                <div className="">
                                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your blog short description</span>
                                </label>
                                <div className="">
                                    <input type="text" name="short" defaultValue={short_description} placeholder="short description" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center " >
                    <fieldset className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl">Enter your Product Long description</span>
                        </label>
                        <div className="">
                            <input type="text" name="longDescription" defaultValue={description} placeholder="Long description" className="input input-bordered w-60 md:w-[550px] lg:w-[835px] pr-16" required />
                        </div>
                    </fieldset>
                </div>
                <div className="flex justify-center pt-10">
                    <input type="submit" value="Update Blog " className="btn bg-yellow-500 text-white md:w-[550px] lg:w-[835px] border-none" />
                </div>
            </form>
        </div>
    );
};

export default Update;