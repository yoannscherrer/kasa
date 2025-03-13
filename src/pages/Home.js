import Card from '../components/Card'; 
import logements from '../logements.json'; 
import '../styles/home.scss'; 
import Banner from "../components/Banner";
import homeBanner from "../assets/home_banner.png";

function Home() {
    return (
        <div className="home">
            <section className="first-section">
                <Banner image={homeBanner} text="Chez vous, partout et ailleurs" opacity={0.6} />
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