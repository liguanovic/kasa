import data from "../../data/data.json";
import img from "../../assets/aboutus.jpg";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import "./about.css";

const About = () => {

    return (
        <main id="about">
            <Banner
                imgSrc={img}
                alt={data.about}
                title={data.about}
            />

            {data.collapse.map(({title, content }) => (
                <Collapse
                    key={title}
                    title={title}
                    content={content}
                />
            ))}
        </main>
    );
};


export default About