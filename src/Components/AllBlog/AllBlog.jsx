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
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                blogs?.map(blog => <AllBlogs key={blog._id} blog={blog}></AllBlogs>)
            }
        </div>
    );
};

export default AllBlog;