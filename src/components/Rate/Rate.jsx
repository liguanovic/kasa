import './rate.css'

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