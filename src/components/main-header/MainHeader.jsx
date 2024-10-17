import KasaLogo from '/assets/kasa-logo__primary.png'
import {NavLink} from "react-router-dom";
import "./main-header.scss"

export default function MainHeader() {
    return (
        <header className="main-header">
            <img src={KasaLogo} alt="Kasa Logo" className='kasa-logo'/>
            <nav className={'nav-bar'}>
                <NavLink
                    to='/kasa'
                    className={({isActive}) =>
                        `nav-bar__link ${isActive ? 'active' : ''}`
                    } end>Accueil</NavLink>
                <NavLink
                    to='/kasa/about'
                    className={({isActive}) =>
                        `nav-bar__link ${isActive ? 'active' : ''}`
                    } end>A propos</NavLink>
            </nav>
        </header>
    )
}