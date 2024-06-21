import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, cover, id }) => {
    return (
        <Link to={`/housing/${id}`}>
        <figure className="card">
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
        </figure>
        </Link>
    );
}

export default Card;