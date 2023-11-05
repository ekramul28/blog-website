
const Update = () => {
    const handelForm = () => {

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
                                    <input type="text" name="name" placeholder="Title Name" className="input input-bordered w-60 md:w-[300px] lg:w-[400px] pr-16" required />
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
                        </div>

                    </div>
                    <div>
                        <div >
                            <fieldset className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your Blog Category</span>
                                </label>
                                <div className="">
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
                                </div>
                            </fieldset>
                        </div>
                        <div >
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl">Enter your blog short description</span>
                                </label>
                                <div className="">
                                    <input type="text" name="short" placeholder="short description" className="input input-bordered w-60 lg:w-[400px] pr-16" required />
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
                            <input type="text" name="longDescription" placeholder="Long description" className="input input-bordered w-60 md:w-[550px] lg:w-[835px] pr-16" required />
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