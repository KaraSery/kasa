import KasaLogo from '../../assets/kasa-logo__white.png';

import './main-footer.scss'

export default function MainFooter() {
    return(
        <footer className="main-footer">
            <img src={KasaLogo} alt="Kasa Logo" className={"kasa-logo"}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}