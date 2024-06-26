import { Link } from 'react-router-dom';

import './card.css';

/**
 * Renders a card component with a link to a housing page.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.cover - The URL of the cover image.
 * @param {string} props.id - The ID of the housing.
 * @return {JSX.Element} The rendered card component.
 */
const Card = ({ title, cover, id }) => {
    return (
        <Link to={`/housing/${id}`}>
        <figure className='card'>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
        </figure>
        </Link>
    );
}

export default Card;