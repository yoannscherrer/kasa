import { Link } from "react-router-dom";
import '../styles/card.scss'

function Card({ cover, title, logement}) {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className="card" style={{ backgroundImage: `url(${cover})` }}>
                <div className="card-details">
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;