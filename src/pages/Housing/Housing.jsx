import { useParams } from "react-router-dom";
import data   from "../../data/data.json";
import Error  from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";

import "./housing.css"

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
        </main>

    );
}

export default Housing

