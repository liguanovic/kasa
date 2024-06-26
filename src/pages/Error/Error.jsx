import './error.css';

/**
 * Renders an error message with a 404 status code.
 *
 * @return {JSX.Element} The error message JSX element.
 */
const Error = () => {
    return (
        <main id="error">
            <h1>404</h1>  
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d’accueil</a>
        </main>
    )
}

export default Error