import '../styles/card.scss'

function Card({ cover, title}) {
    return (
        <div className="card" style={{ backgroundImage: `url(${cover})` }}>
            <div className="card-details">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Card;