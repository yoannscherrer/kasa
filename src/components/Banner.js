import "../styles/banner.scss"; 

function Banner({ image, text, opacity }) {
    return (
        <section 
            className="banner-section"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div 
                className="banner-overlay" 
                style={{ opacity: opacity }}
            ></div>
            {text && <p className="banner-text">{text}</p>}
        </section>
    );
}

export default Banner;