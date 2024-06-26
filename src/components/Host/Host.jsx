import './host.css'

/**
 * Renders a host component with the given name and picture.
 *
 * @param {Object} props - The props object containing the name and picture.
 * @param {string} props.name - The full name of the host.
 * @param {string} props.picture - The URL of the host's picture.
 * @return {JSX.Element} The host component.
 */
const Host = ({ name, picture }) => {
    const [firstname, lastname] = name.split(" ");

    return (
        <figure className="host">
            <img src={picture} alt={name} />
            <figcaption>
                {firstname} 
                <br />
                {lastname}
            </figcaption>
        </figure>
    );
}

export default Host