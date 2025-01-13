import '../styles/banner.css'
import logo from '../assets/logo.png'

function Banner() { 
    return (
    <div className="kasa-banner">
        <img src={logo} alt='Kasa' className='kasa-logo' />
    </div>
    )
}

export default Banner