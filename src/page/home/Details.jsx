import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import axios from "axios";
import Comment from "../../Components/Comment/Comment";

const Details = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, category, image, short_description, title, description, email } = data;
    console.log(data)
    console.log(email, user?.email);
    const [comments, setComment] = useState([])
    useEffect(() => {
        fetch(`https://blog-website-server-zeta.vercel.app/comment/${_id}`)
            .then(res => res.json())
            .then(data => {
                setComment(data);
            })
    }, [_id])


    const handelForm = (e) => {
        e.preventDefault()
        const value = e.target.area.value;
        const comment = { email: user?.email, photoURL: user?.photoURL, value, id: _id };

        e.target.reset()
        axios.post('https://blog-website-server-zeta.vercel.app/comment', comment)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Comment Successful',
                        'success'
                    )

                    fetch(`https://blog-website-server-zeta.vercel.app/comment/${_id}`)
                        .then(res => res.json())
                        .then(data => {
                            setComment(data);
                        })

                }
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className=" card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <h2 className="text-xl font-semibold">{category}</h2>
                    <p className="text-md font-medium">{short_description}</p>
                    <p>{description}</p>
                    {
                        (user?.email == email) ? <>
                            <div className="card-actions justify-end">
                                <Link to={`/updateBlog/${_id}`}><button className="btn bg-yellow-500 text-white border-none">Update</button></Link>
                            </div>
                        </> : ""
                    }

                </div>
            </div>
            <div className="bg-green-500 p-20">
                <h1 className="text-3xl text-center font-bold">Write Your Comment</h1>
                <div className="  flex justify-around items-center ">
                    <form onSubmit={handelForm}>

                        <div >
                            <fieldset className="form-control">
                                <label className="label ">
                                    <span className=" text-xl">Enter your comment</span>
                                </label>
                                <div className="">
                                    {
                                        (user?.email == email) ? " you can not comment your blog" : <textarea className=" border-2 p-3 rounded-lg  w-60 lg:w-[400px] pr-16" name="area" id="" cols="30" rows="5" placeholder="write your comment" required></textarea>
                                    }

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
            {

                comments?.map(comment => <Comment key={comment._id} comment={comment} ></Comment>)
            }

        </div>
    );
};

export default Details;