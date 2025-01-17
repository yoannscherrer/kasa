import { useParams, useNavigate } from "react-router-dom";
import logements from "../logements.json";
import Carousel from "./Carroussel";
import Collapse from "./Collapse";
import "../styles/logement.scss";
import etoilePleine from "../assets/etoile_pleine.png";
import etoileVide from "../assets/etoile_vide.png";

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = logements.find((item) => item.id === id);
    
    if (!logement) {
        navigate("/error");
        return null;
    }

    // Séparation du nom complet en prénom et nom
    const [firstName, lastName] = logement.host.name.split(' ');

    return (
        <div className="logement-page">
            <Carousel pictures={logement.pictures} />
            <div className="logement">
                <div className="info-logement"> 
                    <h1>{logement.title}</h1>
                    <div className="host-info">
                        <div className="host-name">
                            <p>{firstName}</p> {/* Affichage du prénom */}
                            <p>{lastName}</p>  {/* Affichage du nom */}
                        </div>
                        <img src={logement.host.picture} alt="host_picture" />
                    </div>
                </div>
                <p id="logement-location">{logement.location}</p>  
                <div className="top-info">
                  <div className="tags-container">
                      {logement.tags.map((tag, index) => (
                          <span key={index} className="tag">
                              {tag}
                          </span>
                      ))}
                  </div>
                  <div className="rating">
                      {Array(5)
                          .fill(null)
                          .map((_, index) => (
                              <img
                                  key={index}
                                  src={index < logement.rating ? etoilePleine : etoileVide}
                                  alt={index < logement.rating ? "Étoile pleine" : "Étoile vide"}
                                  className="star"
                              />
                          ))}
                  </div>
                </div>
                <div className="logement-collapses">
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
            {/* Ajoutez les autres détails du logement */}
        </div>
    );
}

export default Logement;
