import {Link} from "react-router-dom";
import './error-404-content.scss'
export default function Error404Content() {
    return(
        <div className="error-404">
            <h1 className="error-404__title">404</h1>
            <p className="error-404__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error-404__back-home'>Retourner sur la page d'accueil</Link>
        </div>
    )
}