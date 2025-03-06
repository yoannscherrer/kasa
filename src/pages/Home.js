import Card from '../components/Card'; 
import logements from '../logements.json'; 
import '../styles/home.scss'; 

function Home() {
    return (
        <div className="home">
            <section className="first-section">
            <p className="first-section-text">Chez vous, partout et ailleurs</p>
            </section>

            <section className="second-section">
                <div className="card-list">
                    {logements.map((logement) => (
                        <Card
                            key={logement.id}
                            cover={logement.cover}
                            title={logement.title}
                            logement={logement}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;