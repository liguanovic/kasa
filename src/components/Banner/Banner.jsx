import './banner.css';

/**
 * Renders a banner component with an image and a title.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.imgSrc - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} props.title - The title to be displayed.
 * @return {JSX.Element} The rendered banner component.
 */
const Banner = ({ imgSrc, alt, title }) => {

    return (
        <header className='banner'>
            <img src={imgSrc} alt={alt} />
            <h1>{title}</h1>
        </header>
    );
}

export default Banner
