import './host.css'

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