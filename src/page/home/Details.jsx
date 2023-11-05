import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            ok
        </div>
    );
};

export default Details;