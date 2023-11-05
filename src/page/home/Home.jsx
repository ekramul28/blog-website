import Banner from "./Banner";
import Footer from "./Footer";
import NewSletter from "./NewSleter";
import RecentBlog from "./RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <NewSletter></NewSletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;