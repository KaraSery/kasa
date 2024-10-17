import {Link, Outlet, useRouteError} from "react-router-dom";
import './error-404-page.scss'
import MainHeader from "../../components/main-header/MainHeader.jsx";
import MainFooter from "../../components/main-footer/MainFooter.jsx";

export default function Error404() {
    let error = useRouteError();
    console.error(error);
    return (
        <>
            <MainHeader/>
            <main>
                <div className="error-404">
                    <h1 className="error-404__title">404</h1>
                    <p className="error-404__text">Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/kasa" className='error-404__back-home'>Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <MainFooter/>
        </>
    )
}