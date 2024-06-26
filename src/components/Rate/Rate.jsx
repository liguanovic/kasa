import './rate.css'

/**
 * Renders a rating component with a specified number of stars.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.rate - The rating value.
 * @return {JSX.Element} The rendered rating component.
 */
const Rate = ({ rate }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rate) {
            stars.push(<i key={i} className="fas fa-star full-star"></i>);
        } else {
            stars.push(<i key={i} className="fas fa-star empty-star"></i>);
        }
    }

    return (
        <figure className="rate">
            {stars}
        </figure>
    );
}

export default Rate