import {Outlet} from "react-router-dom";
import MainHeader from "../components/main-header/MainHeader.jsx";
import MainFooter from "../components/main-footer/MainFooter.jsx";

export default function Layout() {
    return (
        <>
            <MainHeader/>
            <main>
                <Outlet/>
            </main>
            <MainFooter/>
        </>
    );
}
