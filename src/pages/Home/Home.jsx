import data from '../../data/data.json';
import img from '../../assets/home.jpg';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

import './home.css';

/**
 * Renders the Home component with a title and a list of housing cards.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <main id='home'>
            <Banner 
                imgSrc={img} 
                alt={data.home}
                title={title} 
            />
            <ul>
                {data.housing.map((card) => (
                    <li key={card.id}>
                        <Card
                            title={card.title}
                            cover={card.cover}
                            id={card.id}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Home