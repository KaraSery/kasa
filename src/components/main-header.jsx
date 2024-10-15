import KasaLogo from '/assets/kasa-logo__primary.png'
import {Link} from "react-router-dom";
import "./main-header.scss"
export default function MainHeader() {
    return(
        <header className="main-header">
            <img  src={KasaLogo} alt="Kasa Logo" className='kasa-logo'/>
            <nav className={'nav-bar'}>
                <Link to={'/kasa'} className={'nav-bar__link'}>Accueil</Link>
                <Link to={'/kasa/about'} className={'nav-bar__link'}>A propos</Link>
            </nav>
        </header>
    )
}