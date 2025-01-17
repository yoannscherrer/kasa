import { Link } from "react-router-dom";
import "../styles/errorPage.scss";

function Error404() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="back-home">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error404;