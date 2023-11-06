import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike, AiFillHeart } from 'react-icons/ai';
const Comment = ({ comment }) => {
    const { email, photoURL, value } = comment;
    // const find = comment?.find(ok => comment._id == ok.id);
    // console.log(find);
    return (
        <div className='flex gap-6 items-center my-2'>
            <img className='rounded-full w-20 h-20' src={photoURL} alt="" />
            <div className=''>
                <h1 className='font-semibold'>{email}</h1>
                <p>{value}</p>
                <div className='flex gap-4'>
                    <AiFillLike />
                    <AiFillDislike />
                    <AiFillHeart />
                </div>
            </div>


        </div>
    );
};
Comment.propTypes = {
    comment: PropTypes.object,
}
export default Comment;