import "./banner.css";

const Banner = ({ imgSrc, alt, title }) => {

    return (
        <header className="banner">
            <img src={imgSrc} alt={alt} />
            <h1>{title}</h1>
        </header>
    );
}

export default Banner
