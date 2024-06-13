import data from "../../data/data.json";
import img from "../../assets/home.jpg";
import Banner from "../../components/Banner/Banner";
import './home.css';

const Home = () => {
    const title = "Chez vous, partout et ailleurs"
    return (
    <main id="home">
        <Banner 
        imgSrc={img} 
        alt={data.home}
        title={title} 
        />
        </main>
    )
}

export default Home