import AboutUs from "../../Components/About/About";
import StartABlog from "../../Components/start a blog/startABlog";
import Banner from "./Banner";
import Footer from "./Footer";
import NewSletter from "./NewSleter";
import RecentBlog from "./RecentBlog";
import { motion } from "framer-motion"
const Home = () => {
    return (

        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <Banner></Banner>
                <RecentBlog></RecentBlog>

            </motion.div>

            <motion.div
                animate={{ x: [0, 100, 0] }}
            >
                <NewSletter></NewSletter>
                <StartABlog></StartABlog>
                <AboutUs></AboutUs>
                <Footer></Footer>
            </motion.div>


        </div>
    );
};

export default Home;