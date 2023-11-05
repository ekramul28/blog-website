import { useEffect, useState } from "react";
import Blog from "./Blog";

const RecentBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-20 ">
            {
                blogs?.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default RecentBlog;