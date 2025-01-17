import { useState } from "react";
import "../styles/carrousel.scss";
import arrow_left from "../assets/arrow_left.png";
import arrow_right from "../assets/arrow_right.png";

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            {pictures.length > 0 && (
                <div
                    className="carousel-image"
                    style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
                ></div>
            )}
            {pictures.length > 1 && (
                <>
                    <img src={arrow_left} alt="arrow_left" className="carousel-arrow left" onClick={handlePrevious}/>   
                    <img src={arrow_right} alt="arrow_right" className="carousel-arrow right" onClick={handleNext}/>
                    <div className="carousel-counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Carousel;
