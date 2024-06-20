import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, cover, id }) => {
    return (
        <figure className="card">
            <Link to={`/housing/${id}`}>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
            </Link>
        </figure>
    );
}

export default Card;