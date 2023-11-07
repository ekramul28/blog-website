import AboutUs from "../../Components/About/About";
import StartABlog from "../../Components/start a blog/startABlog";
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
            <StartABlog></StartABlog>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;