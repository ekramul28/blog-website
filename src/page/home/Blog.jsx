
const Blog = ({ blog }) => {
    console.log(blog)
    const { category, image, short_description, title } = blog
    return (
        <div className="">
            <div className="card  bg-base-100 shadow-xl h-[620px]">
                <figure><img className="w-full h-[300px]" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <h1>{category}</h1>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <button>ok</button>
                        <button>ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;