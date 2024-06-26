import { useParams } from "react-router-dom";
import data   from "../../data/data.json";
import Error  from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse"

import "./housing.css"

/**
 * Renders the details of a housing card including title, location, tags, host information, and description.
 *
 * @return {JSX.Element} The JSX element representing the housing details.
 */
const Housing = () => {
    const { id } = useParams();
    const card = data.housing.find((card) => card.id === id.toString());

    if (!card) {
        return <Error />;
    }

    return (
        <main id="housing">
            <Carousel
                pictures= {card.pictures}
                alt= {card.title}
            />

            <section className="details">
                <header>
                <h1>{card.title}</h1>
                <p>{card.location}</p>
                <ul>
                    {card.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                </header>

                <figure>
                <Host 
                name={card.host.name}
                picture={card.host.picture} />
                <Rate rate={card.rating} />
                </figure>
            </section>

            <section className="description">
                < Collapse 
                title="Description"
                content={card.description} />

                < Collapse
                title="Équipements"
                content={card.equipments} />
            </section>
        </main>

    );
}

export default Housing

