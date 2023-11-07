import { useEffect, useState } from "react";
import Blog from "./Blog";

const RecentBlog = () => {
    const [blogs, setBlogs] = useState([]);
    console.log()
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])
    return (
        <div className="my-10" >
            <h1 className="text-4xl font-bold text-center my-7">Recent Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  ">
                {
                    blogs?.slice(blogs.length - 6, blogs.length).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;