import AllBlogs from "../Allblogs/Allblogs";
import { useEffect, useState } from "react";

const AllBlog = () => {
    // const blogs = useLoaderData()
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);

            })
    }, [])
    const handelSelect = (e) => {

        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const filter = blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
        setBlogs(filter);
        console.log(filter)
    }
    const handelChange = (e) => {
        e.preventDefault();
        const value = e.target.text.value;
        const filter = blogs.filter(blog => blog.title.toLowerCase().includes(value));
        setBlogs(filter);
        console.log(filter);

    }

    return (
        <div >
            <div className="m-10 flex justify-around items-center">
                <form onSubmit={handelSelect}>
                    <select name="category" className="input input-bordered w-60 md:w-[300px] lg:w-[400px] pr-16" required>
                        <option value="travel">Travel</option>
                        <option value="photography">Photography</option>
                        <option value="wellness">Wellness</option>
                        <option value="outKnowledge">OutKnowledge</option>
                    </select>
                    <input type="submit" value="filter" className="btn bg-yellow-500 text-white" />
                </form>
                <div>
                    <form onSubmit={handelChange}>
                        <input className="input input-bordered w-60 md:w-[300px] lg:w-[400px] pr-16" type="text" name="text" id="" placeholder="Search" />
                        <input type="submit" value="Search" className="btn bg-yellow-500 text-white" />
                    </form>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    blogs?.map(blog => <AllBlogs key={blog._id} blog={blog}></AllBlogs>)
                }
            </div>
        </div>
    );
};

export default AllBlog;